const colors = require('tailwindcss/colors')
// Code Highlighting Section Start
// typography-section-starting

const ct = {
  // warning-bg
  'warning-bg': colors.yellow[200],
  'warning-left': colors.yellow[400],
  'warning-head': colors.orange[400],
  'warning-para': colors.amber[500],
  h1: colors.slate['100'],
  'h1-a':colors.cyan['200'],
  'h1-strong': colors.slate[50],
  'h1-a-strong':colors.sky[600],
  h2: colors.slate[200],
  'h2-strong': colors.slate[100],
  h3: colors.slate[200],
  'h3-strong': colors.slate[100],
  h4: colors.slate[200],
  'h4-strong': colors.slate[100],
  p: colors.slate[500]+'BB',
  'p-strong': colors.slate[400]+'BB',
  hr:colors.slate[300],
  ol:colors.slate[300],
  ul:colors.slate[300],
  a: colors.blue[300],
  'a-code': colors.blue[600],
  'a-ul':'linear-gradient(to bottom, rgba(165, 243, 252, 0.4) 0%,rgba(165, 243, 252, 0.4) 100%)',
  code:colors.slate[200],
  'code-bg':colors.slate[700],
  pre: colors.slate[200],
  blockquote: colors.slate[700],
  'blockquote-bg':colors.slate[100],
  'blockquote-left':colors.slate[400],
  'figure-figcaption':colors.slate[900]
}

const dk = {
  // warning-bg
  'warning-bg': colors.yellow[200],
  'warning-left': colors.yellow[400],
  'warning-head': colors.orange[400],
  'warning-para': colors.amber[500],
  h1: colors.slate[900],
  'h1-a':colors.cyan[500],
  'h1-strong': colors.slate[1000],
  'h1-a-strong':colors.sky[600],
  h2: colors.slate[800],
  'h2-strong': colors.slate[900],
  h3: colors.slate[800],
  'h3-strong': colors.slate[900],
  h4: colors.slate[800],
  'h4-strong': colors.slate[900],
  p: colors.slate[800]+'BB',
  'p-strong': colors.slate[900]+'BB',
  hr:colors.slate[300],
  ol:colors.slate[600],
  ul:colors.slate[600],
  a: colors.blue[600],
  'a-code': colors.blue[800],
  'a-ul':'linear-gradient(to bottom, rgba(165, 243, 252, 0.4) 0%,rgba(165, 243, 252, 0.4) 100%)',
  code:colors.slate[700],
  'code-bg':colors.slate[900],
  pre: colors.slate[200],
  blockquote: colors.slate[800],
  'blockquote-bg':colors.slate[100],
  'blockquote-left':colors.slate[400],
  'figure-figcaption':colors.slate[900]
}

module.exports = {
  mode:'jit',
  content: ['./src/**/*.md', './src/**/*.{astro,html,js,jsx}'],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        ...colors,
        slate:{
          ...colors.slate,
          1000:'#030E1C'
        },
        purple:{
          ...colors.purple,
          1000:'#1A0122',
        },
        blue:{
          ...colors.blue,
          1000:'#00145B'
        }
      },
      fill: {
        ...colors
      },
      stroke:{
        ...colors
      },
      boxShadow:{
        "white-xl":"0px 3px 1.2px 0px rgba(255,255,255, 0.01), 0px 3px 2.4px 0px rgba(255,255,255, 0.02), 0px 3px 4.8px 0px rgba(255,255,255, 0.04), 0px 3px 9.6px 0px rgba(255,255,255, 0.08), 0px 3px 19.4px 0px rgba(255,255,255, 0.10), 0px 3px 39.8px 0px rgba(255,255,255, 0.16);",
        "white-md":"0px 3px 1.2px 0px rgba(255,255,255, 0.01), 0px 3px 2.4px 0px rgba(255,255,255, 0.05), 0px 3px 4.8px 0px rgba(255,255,255, 0.07), 0px 3px 12px 2px rgba(255,255,255, 0.09), 0px 3px 19.4px 0px rgba(255,255,255, 0.16);",
        "white-sm":"0px 3px 1.2px 0px rgba(255,255,255, 0.01), 0px 3px 6px 0px rgba(255,255,255, 0.05), 0px 3px 12px 1px rgba(255,255,255, 0.12), 0px 3px 12px 0px rgba(255,255,255, 0.16);",

        "blue-xl":"0px 8px 10px 0px #A2FFF477, 0px 4px 17px 0px #FFFFFF26",
        "blue-md":"0px 6px 10px 0px #A2FFF477, 0px -6px 8px 0px #A2FFF477, 0px 3px 17px 0px #FFFFFF26",
      },
      transitionProperty: {
        'shadow-colors': 'shadow,color',
        'spacing': 'margin, padding',
        'transform-colors': 'transform,color',
      },
      transitionTimingFunction: {
        'snappy': 'cubic-bezier(.2,.8,.4,1)',
        'swift': 'cubic-bezier(0.175,0.885,0.32,1.275)',
      },
      fontFamily: {
        code: 'JetBrains Mono, monospace',
        p:'Jua, sans-serif',
        heading:'Skranji, cursive',
        flow: 'Flow',
      },
      typography: (theme) => ({
        'theme-light':{
          css:{
            h1: {
              textShadow:`2px 2px 1px ${dk['h1']}77`,
              color: dk['h1'],
              fontFamily:theme('fontFamily.heading'),
              fontWeight: '800',
            },
            'h1 strong': {
              color: dk['h1-strong'],
              fontWeight: '900',
            },
            'h1 a': {
              transition:"300ms color, boxShadow ease-in",
              color:dk['h1'],
              backgroundSize:'0px 0px',
              background:'#FFFFFF00',
              '&:hover':{
                color:dk['h1-a'],
                textShadow:`0px 0px 2px ${dk['h1-a']}AA`
              },
              '&:hover strong':{
                  color:dk['h1-a-strong'],
                  textShadow:`0px 0px 2px ${dk['h1-a-strong']}AA`
              },
            },
            h2: {
              fontFamily:theme('fontFamily.heading'),
              color: dk['h2'],
              fontWeight: '700',
            },
            'h2 strong': {
              color: dk['h2-strong'],
              fontWeight: '800',
            },
            'h2 a': {
              transition:"300ms color, boxShadow ease-in",
              color:dk['h1'],
              backgroundSize:'0px 0px',
              background:'#FFFFFF00',
              '&:hover':{
                color:dk['h1-a'],
                textShadow:`0px 0px 2px ${dk['h1-a']}AA`
              },
              '&:hover strong':{
                  color:dk['h1-a-strong'],
                  textShadow:`0px 0px 2px ${dk['h1-a-strong']}AA`
              },
            },
            h3: {
              fontFamily:theme('fontFamily.heading'),
              color: dk['h3'],
              fontWeight: '600',
            },
            'h3 strong': {
              color: dk['h3-strong'],
              fontWeight: '700',
            },
            'h3 a': {
              transition:"300ms color, boxShadow ease-in",
              color:dk['h1'],
              backgroundSize:'0px 0px',
              background:'#FFFFFF00',
              '&:hover':{
                color:dk['h1-a'],
                textShadow:`0px 0px 2px ${dk['h1-a']}AA`
              },
              '&:hover strong':{
                  color:dk['h1-a-strong'],
                  textShadow:`0px 0px 2px ${dk['h1-a-strong']}AA`
              },
            },
            h4: {
              fontFamily:theme('fontFamily.heading'),
              color: dk['h4'],
              fontWeight: '600',
            },
            'h4 strong': {
              color: dk['h4-strong'],
              fontWeight: '700',
            },
            'h4 a': {
              transition:"300ms color, boxShadow ease-in",
              color:dk['h1'],
              backgroundSize:'0px 0px',
              background:'#FFFFFF00',
              '&:hover':{
                color:dk['h1-a'],
                textShadow:`0px 0px 2px ${dk['h1-a']}AA`
              },
              '&:hover strong':{
                  color:dk['h1-a-strong'],
                  textShadow:`0px 0px 2px ${dk['h1-a-strong']}AA`
              },
            },
            p: {
              color: dk['p'],
              letterSpacing: '1px',
              fontFamily: theme('fontFamily.p'),
            },
            'p strong': {
              color: dk['p-strong'],
              fontFamily: theme('fontFamily.p'),
              fontWeight: '600',
            },
            'a': {
              color: dk['a'],
              background: dk['a-ul'],
              backgroundPosition: '0 100%',
              backgroundRepeat: 'repeat-x',
              backgroundSize: '4px 4px',
              paddingRight:'1px',
              paddingLeft:'1px',
              textDecoration:'none',
              transition:'background-size .2s',
              fontWeight:'500',
              '&:hover':{
                backgroundSize: '4px 50px',
              },
            },
            'p a':{
              fontFamily: dk['fontFamily.p']
            },
            // List stling beginning here,
            '[class~="lead"]': {
              color: theme('colors.slate.800'),
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: 'absolute',
              fontWeight: '400',
              color: dk['ol'],
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: dk['ul'],
              borderRadius: '50%',
            },
            hr: {
              borderColor: dk['hr'],
              borderTopWidth: 3,
            },
            '.warning.custom-block':{
              clipPath: "inset(0 round 4px)",
              backgroundColor:dk['warning-bg'],
              borderLeftWidth: '0.25rem',
              paddingLeft:'12px',
              paddingRight:'12px',
              paddingTop:'16px',
              paddingBottom:'16px',
              borderLeftColor: dk['warning-left'],
              '& p.custom-block-title':{
                marginTop:'0px',
                marginBottom:'6px',
                fontFamily: theme('fontFamily.code'),
                fontWeight: '700',
                color: dk['warning-head'],
              },
              '& p ':{
                marginTop:'0px',
                marginBottom:'0px',
                fontFamily: theme('fontFamily.code'),
                color:dk['warning-para'],
                opacity:1,
                fontWeight: '500',
              },
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: dk['blockquote'],
              clipPath: "inset(0 round 4px)",
              backgroundColor:dk['blockquote-bg'],
              borderLeftWidth: '0.25rem',
              borderLeftColor: dk['blockquote-left'],
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
            'figure figcaption': {
              color: dk['figure-figcaption'],
            },
            code: {
              color: dk['code'],
              fontWeight: '600',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
            'a code': {
              color: dk['a-code'],
            },
            pre: {
              color: dk['pre'],
              backgroundColor: dk['code-bg'],
              overflowX: 'auto',
              maxWidth:'fit-content',
              clipPath: "inset(0 round 4px)",
            },
            'pre code':{
              fontFamily:theme('fontFamily.code')
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
          }
        },
        'theme-slate': {
          css: {
            '&::selection':{
              backgroundImage:'#FF0060',
            },
            // typography-section-starting
            h1: {
              textShadow:`2px 2px 1px ${ct['h1']}77`,
              color: ct['h1'],
              fontFamily:theme('fontFamily.heading'),
              fontWeight: '800',
            },
            'h1 strong': {
              color: ct['h1-strong'],
              fontWeight: '900',
            },
            'h1 a': {
              transition:"300ms color, boxShadow ease-in",
              color:ct['h1'],
              backgroundSize:'0px 0px',
              background:'#FFFFFF00',
              '&:hover':{
                color:ct['h1-a'],
                textShadow:`0px 0px 2px ${ct['h1-a']}AA`
              },
              '&:hover strong':{
                  color:ct['h1-a-strong'],
                  textShadow:`0px 0px 2px ${ct['h1-a-strong']}AA`
              },
            },
            h2: {
              fontFamily:theme('fontFamily.heading'),
              color: ct['h2'],
              fontWeight: '700',
            },
            'h2 strong': {
              color: ct['h2-strong'],
              fontWeight: '800',
            },
            'h2 a': {
              transition:"300ms color, boxShadow ease-in",
              color:ct['h1'],
              backgroundSize:'0px 0px',
              background:'#FFFFFF00',
              '&:hover':{
                color:ct['h1-a'],
                textShadow:`0px 0px 2px ${ct['h1-a']}AA`
              },
              '&:hover strong':{
                  color:ct['h1-a-strong'],
                  textShadow:`0px 0px 2px ${ct['h1-a-strong']}AA`
              },
            },
            h3: {
              fontFamily:theme('fontFamily.heading'),
              color: ct['h3'],
              fontWeight: '600',
            },
            'h3 strong': {
              color: ct['h3-strong'],
              fontWeight: '700',
            },
            'h3 a': {
              transition:"300ms color, boxShadow ease-in",
              color:ct['h1'],
              backgroundSize:'0px 0px',
              background:'#FFFFFF00',
              '&:hover':{
                color:ct['h1-a'],
                textShadow:`0px 0px 2px ${ct['h1-a']}AA`
              },
              '&:hover strong':{
                  color:ct['h1-a-strong'],
                  textShadow:`0px 0px 2px ${ct['h1-a-strong']}AA`
              },
            },
            h4: {
              fontFamily:theme('fontFamily.heading'),
              color: ct['h4'],
              fontWeight: '600',
            },
            'h4 strong': {
              color: ct['h4-strong'],
              fontWeight: '700',
            },
            'h4 a': {
              transition:"300ms color, boxShadow ease-in",
              color:ct['h1'],
              backgroundSize:'0px 0px',
              background:'#FFFFFF00',
              '&:hover':{
                color:ct['h1-a'],
                textShadow:`0px 0px 2px ${ct['h1-a']}AA`
              },
              '&:hover strong':{
                  color:ct['h1-a-strong'],
                  textShadow:`0px 0px 2px ${ct['h1-a-strong']}AA`
              },
            },
            p: {
              color: ct['p'],
              letterSpacing: '1px',
              fontFamily: theme('fontFamily.p'),
            },
            'p strong': {
              color: ct['p-strong'],
              fontFamily: theme('fontFamily.p'),
              fontWeight: '600',
            },
            'a': {
              color: ct['a'],
              background: ct['a-ul'],
              backgroundPosition: '0 100%',
              backgroundRepeat: 'repeat-x',
              backgroundSize: '4px 4px',
              paddingRight:'1px',
              paddingLeft:'1px',
              textDecoration:'none',
              transition:'background-size .2s',
              fontWeight:'500',
              '&:hover':{
                backgroundSize: '4px 50px',
              },
            },
            'p a':{
              fontFamily: ct['fontFamily.p']
            },
            // List stling beginning here,
            '[class~="lead"]': {
              color: theme('colors.slate.800'),
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li': {
              position: 'relative',
            },
            'ol > li::before': {
              content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
              position: 'absolute',
              fontWeight: '400',
              color: ct['ol'],
            },
            'ul > li': {
              position: 'relative',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: ct['ul'],
              borderRadius: '50%',
            },
            hr: {
              borderColor: ct['hr'],
              borderTopWidth: 3,
            },
            '.warning.custom-block':{
              clipPath: "inset(0 round 4px)",
              backgroundColor:ct['warning-bg'],
              borderLeftWidth: '0.25rem',
              paddingLeft:'12px',
              paddingRight:'12px',
              paddingTop:'16px',
              paddingBottom:'16px',
              borderLeftColor: ct['warning-left'],
              '& p.custom-block-title':{
                marginTop:'0px',
                marginBottom:'6px',
                fontFamily: theme('fontFamily.code'),
                fontWeight: '700',
                color: ct['warning-head'],
              },
              '& p ':{
                marginTop:'0px',
                marginBottom:'0px',
                fontFamily: theme('fontFamily.code'),
                color:ct['warning-para'],
                opacity:1,
                fontWeight: '500',
              },
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: ct['blockquote'],
              clipPath: "inset(0 round 4px)",
              backgroundColor:ct['blockquote-bg'],
              borderLeftWidth: '0.25rem',
              borderLeftColor: ct['blockquote-left'],
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
            },
            'blockquote p:first-of-type::before': {
              content: 'open-quote',
            },
            'blockquote p:last-of-type::after': {
              content: 'close-quote',
            },
            'figure figcaption': {
              color: ct['figure-figcaption'],
            },
            code: {
              color: ct['code'],
              fontWeight: '600',
            },
            'code::before': {
              content: '"`"',
            },
            'code::after': {
              content: '"`"',
            },
            'a code': {
              color: ct['a-code'],
            },
            pre: {
              color: ct['pre'],
              backgroundColor: ct['code-bg'],
              overflowX: 'auto',
              maxWidth:'fit-content',
              clipPath: "inset(0 round 4px)",
            },
            'pre code':{
              fontFamily:theme('fontFamily.code')
            },
            'pre code::before': {
              content: 'none',
            },
            'pre code::after': {
              content: 'none',
            },
            // table: {
            //   width: '100%',
            //   tableLayout: 'auto',
            //   textAlign: 'left',
            //   marginTop: em(32, 16),
            //   marginBottom: em(32, 16),
            // },
            // thead: {
            //   color: theme('colors.gray.900'),
            //   fontWeight: '600',
            //   borderBottomWidth: '1px',
            //   borderBottomColor: theme('colors.gray.300'),
            // },
            // 'thead th': {
            //   verticalAlign: 'bottom',
            // },
            // 'tbody tr': {
            //   borderBottomWidth: '1px',
            //   borderBottomColor: theme('colors.gray.200'),
            // },
            // 'tbody tr:last-child': {
            //   borderBottomWidth: '0',
            // },
            // 'tbody td': {
            //   verticalAlign: 'top',
            // },
          },
        },
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.gray.500'),
            '> :first-child': { marginTop: null },
            '> :last-child': { marginBottom: null },
            '&:first-child > :first-child': {
              marginTop: '0',
            },
            '&:last-child > :last-child': {
              marginBottom: '0',
            },
            'h1, h2': {
              letterSpacing: '-0.025em',
            },
            h4: {
              fontSize: '1.125em',
            },
            'h2, h3': {
              'scroll-margin-top': `${(70 + 40) / 16}rem`,
            },
            'ul > li': {
              paddingLeft: '1.5em',
            },
            'ul > li::before': {
              width: '0.75em',
              height: '0.125em',
              top: 'calc(0.875em - 0.0625em)',
              left: 0,
              borderRadius: 0,
              backgroundColor: theme('colors.gray.300'),
            },
            a: {
              color: theme('colors.cyan.700'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              boxShadow: theme('boxShadow.link'),
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            code: {
              fontWeight: '400',
              color: theme('colors.violet.600'),
            },
            'code::before': {
              // content: 'none',
            },
            'code::after': {
              // content: 'none',
            },
            pre: {
              backgroundColor: null,
              color: theme('colors.white'),
              borderRadius: 0,
              marginTop: 0,
              marginBottom: 0,
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.gray.600'),
              borderBottomColor: theme('colors.gray.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.gray.200'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};