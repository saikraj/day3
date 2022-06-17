let resume_json ={
    name:'sairaj kumar',
    age: '29',
    college : 'VIT University',
    course : 'MS SE',
    experience : 7.5,
    skills:['sql','plsql','ords','js']
}

for( i in resume_json){
    console.log(i +  ':'+resume_json[i]);

}
resume_json.skills.forEach((x)=> console.log(x));

for (i=0;i<resume_json.skills.length;i++){
    console.log(resume_json.skills[i])
}

for (i of resume_json.skills ){
    console.log(i)
}