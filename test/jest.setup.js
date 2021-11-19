// jest.mock("react-static", () => {
//   const {
//     Root,
//     Routes,
//     addPrefetchExcludes,
//     useRoutePath,
//   } = jest.requireActual("react-static")

//   return {
//     __esModule: true,
//     useRouteData: jest.fn(() => {
//       const path = useRoutePath()
//       console.log("@@@@@@", path)
//       return {
//         langFromPath: path.includes("/en") ? "en" : "de",
//       }
//     }),
//     useSiteData: jest.fn(() => {
//       return {
//         translations: {},
//       }
//     }),
//     Root,
//     Routes,
//     addPrefetchExcludes,
//   }
// })
