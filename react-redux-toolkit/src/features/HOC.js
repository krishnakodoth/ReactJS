import React from 'react'

const HOC = (WrapedComponent,entity) => {
    return class extends React.Component{
        state = {
            data:[],
            term:""
        }
        componentDidMount(){
            console.log(entity)
            const fetchData = async () => {
                const res = await fetch(`https://jsonplaceholder.typicode.com/${entity}`)
                const json = await res.json();
                this.setState({...this.state,data:json});
            }
            fetchData();
        }

        render(){
            console.log(this.state)
            const {term,data} = this.state;
            let filteredData = data.filter((d) => {
                if(entity === "users"){
                    const {name} = d;
                    return (name) ? name.toLowerCase().indexOf(term.toLowerCase()) >= 0 : name;
                }
                if(entity === "todos"){
                    const {title} = d;
                    return title.toLowerCase().indexOf(term.toLowerCase()) >= 0;
                }
            })
            return(
                <div>
                <h1>{entity}</h1>
                <input type="text" value={term} onChange={(e) => this.setState({...this.state,term:e.target.value})} />
                <WrapedComponent data={filteredData} />
                </div>
            )
        }
    }
}

export default HOC;