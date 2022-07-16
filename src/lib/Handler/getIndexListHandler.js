const getIndexListHandler = blocks => {
  return blocks
    .filter(block => {
      return block.type === 'heading_1' || block.type === 'heading_2' || block.type === 'heading_3';
    })
    .map(item => item);
};

export default getIndexListHandler;
