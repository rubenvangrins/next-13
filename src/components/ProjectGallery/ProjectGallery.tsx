'use client';

import React, { useEffect } from 'react';

import { useMultipleRefs } from '../../../hooks/useMultipeRefs';
import { lerp } from '../../../utils/math';
import styles from './ProjectGallery.module.scss';

interface ProjectsInterface {
  projects: {
    title: string;
  }[]
}

export default function ProjectGallery({ projects }: ProjectsInterface) {
  const projectRefs = useMultipleRefs(projects.length);

  const state: {
    ticker: number;
    deltaY: number;
    galleryWidth: number;
    cards: {
      current: number;
      previous: number;
      last: number;
      extraXPosition: number;
      ref: HTMLDivElement;
      cardIsLeft: boolean,
      cardIsRight: boolean,
      cardPosition: number,
    }[]
  } = {
    ticker: 0,
    deltaY: 0,
    galleryWidth: 2000,
    cards: [],
  };

  const handleScroll = (e: WheelEvent) => {
    state.cards.forEach((el) => {
      const card = el;
      card.current -= e.deltaY;
    });
  };

  const render = () => {
    state.ticker = window.requestAnimationFrame(render);

    state.cards.forEach((el) => {
      const card = el;

      const { x: cardPositionX, width } = card.ref.getBoundingClientRect();

      card.last = lerp(card.last, el.current, 0.05);

      card.cardIsLeft = cardPositionX + width < 0;
      card.cardIsRight = cardPositionX > window.innerWidth;

      if (card.last < card.previous) {
        if (card.cardIsRight) {
          card.extraXPosition += state.galleryWidth;

          card.cardIsRight = false;
          card.cardIsLeft = false;
        }
      }

      if (card.last > card.previous) {
        if (card.cardIsLeft) {
          card.extraXPosition -= state.galleryWidth;

          card.cardIsRight = false;
          card.cardIsLeft = false;
        }
      }

      card.previous = card.last;

      card.cardPosition = card.last + card.extraXPosition;

      card.ref.style.transform = `translate(${-el.cardPosition}px, 0)`;
    });
  };

  useEffect(() => {
    window.addEventListener('wheel', (e) => { handleScroll(e); });
    state.ticker = window.requestAnimationFrame(render);

    state.cards = projectRefs.map((ref) => ({
      current: 0,
      previous: 0,
      last: 0,
      extraXPosition: 0,
      cardPosition: 0,
      ref: ref.current,
      cardIsRight: false,
      cardIsLeft: true,
    }));

    return () => {
      window.removeEventListener('wheel', (e) => { handleScroll(e); });
      window.cancelAnimationFrame(state.ticker);

      state.cards = [];
    };
  }, []);

  return (
    <div>
      {projects.map((project, index) => (
        <div
          ref={projectRefs[index]}
          className={styles.card}
          style={{ left: `calc(120px * ${index})`, top: `calc(80px * ${index})` }}
          key={index}
        >
          {project.title}
        </div>
      ))}
    </div>
  );
}
