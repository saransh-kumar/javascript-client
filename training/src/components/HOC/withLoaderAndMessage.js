// function withLoaderAndMessage(WrappedComponent) {
//     return class WithLoaderAndMessage extends React.Component {
//         constructor() {
//             super();
//             this.state = {
//                 loader: false,
//                 dataLength: 1,
//             };
//         }
//         render() {
//             if(loader) {
//                 return (
//                     <p>Loader</p>
//                 )
//             }
//             if(dataLength === 0) {
//                 <p>No more data</p>
//             }
//             return (
//                 <WrappedComponent />
//             )
//         }
//     }
// }

// const EnhancedTable = withLoaderAndMessage(Tables)

// <EnhancedTable loader={true} dataLength={10} />