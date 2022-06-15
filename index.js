import express from 'express'
const app = express()

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "15/06/2022", name: "Carnaval" },
    { date: "17/4/2022", name: "Páscoa" },
    { date: "21/4/2022", name: "Tiradentes" },
    { date: "1/5/2022", name: "Dia do trabalho" },
    { date: "16/6/2022", name: "Corpus Christi" },
    { date: "7/9/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "2/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
  ];


app.get("/holidays", (req, res)=>{
    res.send(holidays.map(item=> item.name))
})

app.get("/is-today-holiday", (req, res)=>{
    const hoje = new Date().toLocaleDateString()
    let feriadoDoDia = ''

    for(let i=0 ; i<holidays.length; i++){
        if(holidays[i].date===hoje){
            feriadoDoDia = holidays[i].name
        }
    }

    if(feriadoDoDia!=''){
        res.send(`O feriado do dia é : ${cont}`)
    }
    else{
        res.send('Não tem nenhum feriado para a data de hoje!')
    }
    
    
})


app.listen(4000)


