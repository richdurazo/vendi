// import { ThemeOptions, createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { Theme, ThemeOptions, createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    palette: any;
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    palette: any;
    status?: {
      danger?: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ffe500',
      contrastText: '#0a0a0a',
    },
    secondary: {
      main: '#ffbcf6',
      contrastText: '#192618',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      secondary: '#191c22',
    },
    error: {
      main: '#e22e25',
    },
    warning: {
      main: '#e1c32c',
    },
  },
  typography: {
    fontSize: 11,
    button: {
      textTransform: 'none'
    },
    fontFamily: [
      'Kaleko105Book',
      `-apple-system`,
      `BlinkMacSystemFont0`,
      `Segoe UI`,
      `Roboto`,
      'Oxygen',
      `Ubuntu`,
      `Cantarell`,
      `Fira Sans`
    ].join(','),
  }
});

// export interface ICustomTheme extends Theme {
//   custom: {
//     button: {
//       /** Color set for delete button */
//       delete: {
//         /** Main color for delete */
//         main: string;
//         dark: string;
//         light: string;
//         /** Contrast text color for delete */
//         contrastText: string;
//       };
//       deleteScheduled: {
//         /** Main color for delete */
//         main: string;
//         dark: string;
//         light: string;
//         /** Contrast text color for delete */
//         contrastText: string;
//       };
//     };
//   };
// }
// export const themeOptions: ThemeOptions = {
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#ffe500',
//       contrastText: '#0a0a0a',
//     },
//     secondary: {
//       main: '#ffbcf6',
//       contrastText: '#192618',
//     },
//     background: {
//       default: '#ffffff',
//       paper: '#ffffff',
//     },
//     text: {
//       secondary: '#191c22',
//     },
//     error: {
//       main: '#e22e25',
//     },
//     warning: {
//       main: '#e1c32c',
//     },
//   },
// };
// const theme = (theme: ICustomTheme, themeMode: string) => 
//     createTheme({
//         palette: {
//             mode: themeMode === 'dark' ? 'dark' : 'light',
//             primary: {
//               main: '#ffe500',
//               contrastText: '#0a0a0a',
//             },
//             secondary: {
//               main: '#ffbcf6',
//               contrastText: '#192618',
//             },
//             background: {
//               default: '#ffffff',
//               paper: '#ffffff',
//             },
//             text: {
//               secondary: '#191c22',
//             },
//             error: {
//               main: '#e22e25',
//             },
//             warning: {
//               main: '#e1c32c',
//             },
//           },
//     })
export function MaterialThemeProvider(props: any) {
    const { children } = props;
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    );
  }