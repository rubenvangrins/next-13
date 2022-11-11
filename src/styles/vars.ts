import { css } from 'styled-components';

export const maxTablet = '@media (max-width: 767px)';
export const minTablet = '@media (min-width: 768px)';

export const mobileVW = (px: number) => `${(px / 390) * 100}vw`;
export const desktopVW = (px: number) => `min(${px}px, ${(px / 1440) * 100}vw)`;
export const noMinDesktopVW = (px: number) => `${(px / 1440) * 100}vw`;
export const desktopVH = (px: number) => `${(px / 900) * 100}vh`;
export const ratioVH = () => (window.innerHeight / 900);

export const letterSpacing = (space: number) => `${(space / 1000) * 1}em`;

export const mq = typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)') : { matches: false };
export const mqEveryTouchDevice = typeof window !== 'undefined' ? window.matchMedia('(hover: none), (pointer:coarse)') : { matches: false };

export const sizeVW = (
  width: number | string,
  height: number | string = width,
) => css`
  width: ${typeof width === 'string' ? width : mobileVW(width)};
  height: ${typeof height === 'string' ? height : mobileVW(height)};

  ${minTablet} {
    width: ${typeof width === 'string' ? width : desktopVW(width)};
    height: ${typeof height === 'string' ? height : desktopVW(height)};
  }
`;

export const inset = (customInset: number = 0) => css`
  top: ${customInset}px;
  right: ${customInset}px;
  bottom: ${customInset}px;
  left: ${customInset}px;
`;

export const eases = {
  fast_in_slow_out: 'cubic-bezier(0.53, 0.00, 0.00, 1.00)',
  fast_middle: 'cubic-bezier(0.75, 0.09, 0.00, 0.99)',
  smooth_fast_in_2: 'cubic-bezier(0.25, 0.00, 0.00, 1.00)',
  refined_ease: 'cubic-bezier(0.53, 0.00, 0.00, 1.00)',
};

export const color = {
  black: '#000',
  off_black: '#1D1D1D',
  greys: {
    light: '#E9E9E9',
    dark: '#707070',
  },
  white: '#fff',
};

export const transparentColor = {
  greys: {
    light: {
      50: '#70707080',
    },
  },
};

export const fonts = {
  suisse: {
    book: 'font-family: "Suisse Intl Book"; font-weight: 500;',
    light: 'font-family: "Suisse Intl Light"',
  },
  suisseCondensed: {
    bold: 'font-family: "Suisse Intl Condensed Bold"; font-weight: 600;',
    medium: 'font-family: "Suisse Intl Condensed Medium"; font-weight: 500;',
  },
};

export const typography = {
  'typo-165': `
    ${fonts.suisseCondensed.bold};
    font-size: ${mobileVW(165)};
    line-height: 1;
    
    ${minTablet}{
      font-size: clamp(165px, ${desktopVW(165)}, 165px);
      line-height: clamp(130px, ${desktopVW(130)}, 130px);
    }
  `,

  'typo-160': `
    ${fonts.suisseCondensed.medium};
    font-size: ${mobileVW(60)};
    line-height: 1;
    
    ${minTablet}{
      font-size: clamp(65px, ${desktopVW(160)}, 160px);
      line-height: clamp(58.5px, ${desktopVW(134)}, 134px);  
    }
  `,

  'typo-150': `
    ${fonts.suisseCondensed.medium};
    font-size: ${mobileVW(55)};
    line-height: 1;
    

    ${minTablet}{
      font-size: clamp(55px, ${desktopVW(150)}, 150px);
      line-height: clamp(55.9px, ${desktopVW(124)}, 124px);
    }
  `,

  'typo-100': `
    ${fonts.suisseCondensed.medium};
    font-size: ${mobileVW(55)}
    line-height: 1;
    

    ${minTablet}{
      font-size: clamp(55px, ${desktopVW(100)}, 100px);
      line-height: clamp(55.9px, ${desktopVW(80)}, 80px);
    }
  `,

  'typo-64': `
    ${fonts.suisseCondensed.medium};
    font-size: ${mobileVW(45)};
    line-height: 1;
    

    ${minTablet}{
      font-size: clamp(50px, ${desktopVW(64)}, 64px);
      line-height: clamp(65px, ${desktopVW(83)}, 83px);
    }
  `,

  'typo-55': `
    ${fonts.suisseCondensed.medium};
    font-size: ${mobileVW(30)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(30px, ${desktopVW(55)}, 55px);
      line-height: clamp(30px, ${desktopVW(71)}, 71px);
    }
  `,

  'typo-50': `
    ${fonts.suisse.book};
    font-size: ${mobileVW(26)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(26px, ${desktopVW(50)}, 50px);
      line-height: clamp(32px, ${desktopVW(60)}, 60px);
    }
  `,

  'typo-40': `
    ${fonts.suisse.book};
    font-size: ${mobileVW(26)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(26px, ${desktopVW(40)}, 40px);
      line-height: clamp(32px, ${desktopVW(50)}, 50px);
    }
  `,

  'typo-36': `
    ${fonts.suisse.light};
    color: ${color.greys.dark};
    font-size: ${mobileVW(36)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(36px, ${desktopVW(36)}, 36px);
      line-height: clamp(46px, ${desktopVW(46)}, 46px);
    }
  `,

  'typo-24': `
    ${fonts.suisse.book};
    font-size: ${mobileVW(24)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(18px, ${desktopVW(24)}, 24px);
      line-height: clamp(28px, ${desktopVW(31)}, 31px);
    }
  `,

  'typo-18': `
    ${fonts.suisse.book};
    font-size: ${18};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(18px, ${desktopVW(18)}, 18px);
      line-height: clamp(28px, ${desktopVW(24)}, 24px);
    }
  `,

  'typo-16': `
    ${fonts.suisse.light};
    font-size: ${mobileVW(16)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(16px, ${desktopVW(16)}, 16px);
      line-height: clamp(22px, ${desktopVW(22)}, 22px);
    }
  `,

  'typo-14': `
    ${fonts.suisseCondensed.bold};
    font-size: ${mobileVW(14)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(14px, ${desktopVW(14)}, 14px);
      line-height: clamp(20px, ${desktopVW(20)}, 20px);
    }
  `,

  'typo-14-light': `
    ${fonts.suisse.light};
    font-size: ${mobileVW(14)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(14px, ${desktopVW(14)}, 14px);
      line-height: clamp(20px, ${desktopVW(20)}, 20px);
    }
  `,

  'typo-14-book': `
    ${fonts.suisse.book};
    font-size: ${mobileVW(14)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(14px, ${desktopVW(14)}, 14px);
      line-height: clamp(20px, ${desktopVW(20)}, 20px);
    }
  `,

  'typo-12': `
    ${fonts.suisse.book};
    font-size: ${mobileVW(12)};
    line-height: 1;

    ${minTablet}{
      font-size: clamp(12px, ${desktopVW(12)}, 12px);
      line-height: clamp(20px, ${desktopVW(20)}, 20px);
    }
  `,
};
