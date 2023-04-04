function DropDownContent({ contentLinks }) {
  return (
    <div className='dropdown__content absolute hidden bg-white w-[320px] shadow-lg p-4 rounded-md'>
      {
        contentLinks.map((link, i) => <a href='#' key={i} className='block px-4 py-2 hover:text-red-500 hover:translate-x-1 transition-transform'>{link}</a>)
      }
    </div>
  );
}

export default DropDownContent;