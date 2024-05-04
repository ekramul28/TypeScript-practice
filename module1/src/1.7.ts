{
  //spread operator
  //rest operator
  //destructuring

  const student1: string[] = ["hassan", "yasin", "mamun", "khalam", "rahite"];
  const student2: string[] = ["hassan", "yasin", "mamun", "khalam", "rahite"];
  student1.push(...student2);
  console.log(student1);
}
