/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        '0 - primitives': {
          color: {
            amber: { '500': 'rgb(197, 153, 0)' },
            black: 'rgb(0, 0, 0)',
            white: 'rgb(255, 255, 255)',
            red: { '500': 'rgb(255, 0, 0)' }
          }
        },
        '1 - brands': {
          brand: {
            neutral: 'rgb(0, 0, 0)',
            primary: {
              Photostop: 'rgb(255, 0, 0)',
              Saddles: 'rgb(197, 153, 0)'
            },
            secondary: {
              Photostop: 'rgb(255, 255, 255)',
              Saddles: 'rgb(0, 0, 0)'
            }
          }
        },
        '2 - modes': {
          mode: {
            color: {
              surface: {
                background: { dark: 'rgb(0, 0, 0)', light: 'rgb(255, 0, 0)' },
                foreground: {
                  dark: 'rgb(197, 153, 0)',
                  light: 'rgb(255, 255, 255)'
                }
              },
              text: {
                active: 'rgb(0, 0, 0)',
                default: { dark: 'rgb(197, 153, 0)', light: 'rgb(0, 0, 0)' }
              }
            }
          }
        },
        semantics: {
          color: {
            button: {
              primary: {
                active: 'rgb(255, 255, 255)',
                default: 'rgb(255, 0, 0)',
                hover: 'rgb(255, 255, 255)'
              }
            }
          }
        }
      },
      spacing: {
        '0 - primitives-spacing-lg': '8px',
        '0 - primitives-spacing-md': '4px',
        '0 - primitives-spacing-none': '0px',
        '0 - primitives-spacing-sm': '2px',
        '3 - breakpoints-breakpoint-base-unit-desktop': '4px',
        '3 - breakpoints-breakpoint-base-unit-mobile': '2px',
        '3 - breakpoints-breakpoint-margins-lg-desktop': '8px',
        '3 - breakpoints-breakpoint-margins-lg-mobile': '4px',
        '3 - breakpoints-breakpoint-margins-sm-desktop': '4px',
        '3 - breakpoints-breakpoint-margins-sm-mobile': '2px',
        'core-fontSize-3': '16px',
        'core-lineHeights-100': '100%',
        'core-letterSpacing-none': '0%',
        'core-paragraphSpacing-none': '0px',
        'core-fontSize-2': '14px',
        'core-lineHeights-150': '150%',
        'core-letterSpacing--1': '-1%',
        'core-fontSize-4': '18px',
        'core-fontSize-1': '12px',
        'core-letterSpacing-4': '4%',
        'core-lineHeights-140': '140%',
        'core-letterSpacing-1': '1%',
        'core-letterSpacing--5': '-5%',
        'core-letterSpacing-2': '2%',
        'core-paragraphIndent-0': '0px',
        'core-paragraphSpacing-1': '2px',
        'core-paragraphSpacing-2': '4px',
        'core-paragraphSpacing-3': '8px',
        'core-paragraphSpacing-4': '12px',
        'core-paragraphSpacing-5': '16px',
        'core-paragraphSpacing-6': '24px',
        'core-paragraphSpacing-7': '32px',
        'semantics-spacing-button-margins-horizontal': '4px',
        'semantics-spacing-button-margins-vertical': '2px'
      },
      fontFamily: {
        'core-fontFamilies-family2': 'Inter',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-lg-medium': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-bold': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular-line': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xl-bold': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xs-medium': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-lg': '',
        'core-fontFamilies-family1': 'NAPA SANS',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-xxs': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-lg-medium': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-md-medium': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-medium': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular-underline': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-xs-semi': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-bold': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-regular': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-xs-semi': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-lg-regular': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-regular': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-semi': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-xs-semi': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-medium': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-regular': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-sm-regular': '',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-xs-bold': ''
      },
      fontWeight: {
        'core-fontWeights-medium': 'medium',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-lg-medium': 'medium',
        'core-fontWeights-bold': 'bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-bold': 'bold',
        'core-fontWeights-regular': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular-line': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xl-bold': 'bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xs-medium': 'medium',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-lg': 'bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-xxs': 'bold',
        'core-fontWeights-semi': 'semi-bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-lg-medium': 'semi-bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-md-medium': 'medium',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-medium': 'medium',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular-underline': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-xs-semi': 'semi-bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-bold': 'bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-regular': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-xs-semi': 'semi-bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-lg-regular': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-regular': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-semi': 'semi-bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-xs-semi': 'semi-bold',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-medium': 'medium',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-regular': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-sm-regular': 'regular',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-xs-bold': 'bold'
      },
      fontSize: {
        'breakpoint/desktop-bolt-typography-productive-fluid-body-lg-medium': '16px',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-bold': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular-line': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xl-bold': '18px',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xs-medium': '12px',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-lg': '16px',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-xxs': '12px',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-lg-medium': '12px',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-md-medium': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-medium': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular-underline': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-xs-semi': '12px',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-bold': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-regular': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-xs-semi': '12px',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-lg-regular': '16px',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-regular': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-semi': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-xs-semi': '12px',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-medium': '12px',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-regular': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-sm-regular': '14px',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-xs-bold': '14px'
      },
      lineHeight: {
        'breakpoint/desktop-bolt-typography-productive-fluid-body-lg-medium': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-bold': '150%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular': '150%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular-line': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xl-bold': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xs-medium': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-lg': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-xxs': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-lg-medium': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-md-medium': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-medium': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular-underline': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-xs-semi': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-bold': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-regular': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-xs-semi': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-lg-regular': '140%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-regular': '140%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-semi': '140%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-xs-semi': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-medium': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-regular': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-sm-regular': '100%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-xs-bold': '100%'
      },
      letterSpacing: {
        'breakpoint/desktop-bolt-typography-productive-fluid-body-lg-medium': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-bold': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular': '-1%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-md-regular-line': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xl-bold': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-body-xs-medium': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-lg': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-heading-xxs': '4%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-lg-medium': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-md-medium': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-medium': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-sm-regular-underline': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-interactive-xs-semi': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-bold': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-md-regular': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-label-xs-semi': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-lg-regular': '1%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-regular': '-5%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-md-semi': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-plain-xs-semi': '1%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-medium': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-md-regular': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-sm-regular': '0%',
        'breakpoint/desktop-bolt-typography-productive-fluid-link-underlined-xs-bold': '0%'
      }
    }
  }
}