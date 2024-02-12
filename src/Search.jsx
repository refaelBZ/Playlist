


export default function Search({handleSearch}) {
  
  
  
  const onKeyPress = (event) => {
    // בדיקה אם המקש שנלחץ הוא Enter
    if (event.key === 'Enter') {
      // קריאה ל- handleSearch עם ערך הטקסט
      handleSearch(event.target.value);
    }
  };

  return (
    <div className='searchInput'>
      <input type="search" placeholder='Search any song' onKeyPress={onKeyPress} />
    </div>
  );
}
