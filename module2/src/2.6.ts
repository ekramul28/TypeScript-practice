{
  const createpromise = () => {
    return new Promise((resolve, reject) => {
      const data: string = "somithing";
      if (data) {
        resolve(data);
      } else {
        reject("failed to fetch");
      }
    });
  };

  const showData = async () => {
    const data = await createpromise();
    console.log(data);
  };

  showData();
}
