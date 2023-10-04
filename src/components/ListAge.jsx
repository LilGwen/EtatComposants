import { Fragment } from "react"


const ListAge = ({propList}) => {


  return (
    <>
        {
            propList.map(value => <Fragment key={crypto.randomUUID()}>
                <p>Name : { `${value.fname} ${value.lname}` }</p>
                <p>Born on : { value.birthday.toLocaleDateString('fr-FR') }</p>
                <p>Age :{` ${value.age} ans`} </p>
            </Fragment>)
        }
    </>
  )
}

export default ListAge