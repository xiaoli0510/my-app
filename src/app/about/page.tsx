
// const getData = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('11111','data' + Math.random());
//            resolve('data' + Math.random())
//         }, 5000)

//     })
// }
export default async function About() {
  const data = await getData();
  return <div>
    <div>about</div>
  </div>;
}
