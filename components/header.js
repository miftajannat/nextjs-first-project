function header() {
  return (
    <>
      <header className='bg-gray-50'>
        <div className='lg:container lg:mx-auto flex'>
          <div>
            <input type='text' placeholder='Search' />
          </div>
          <div>
            <a> Design</a>
          </div>
          <div>
            <div className='flex'>
              <a>Facebook</a>
              <a>Twitter</a>
              <a>Youtube</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default header;
