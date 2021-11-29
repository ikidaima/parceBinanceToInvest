const inputFileElem = document.getElementById('input-file');
const reader = new FileReader();

const handleInputChange = (event) => {
  const file = event.target.files[0];

  reader.readAsText(file);
  reader.onload = () => {
    const parseFile = reader.result
      .split('\n')
      .map(item => item.split(','));

    console.log(parseFile);
  };
};

inputFileElem.addEventListener('change', handleInputChange);