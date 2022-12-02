// import { useState } from 'react';

// const Searchbar = ({ onSubmit }) => {
//   const [query, setQuery] = useState('');

//   const onChange = event => {
//     console.log(event.target.value);
//     setQuery(event.target.value);
//   };

//   const onFormSubmit = event => {
//     event.preventDefault();
//     onSubmit(event.target.input.value);
//   };

//   return (
//     <form onSubmit={onFormSubmit}>
//       <input value={query} onChange={onChange} type="text" name="input" />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export { Searchbar };
