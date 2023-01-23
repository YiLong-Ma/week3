import styles from '@/styles/About.module.css'
import data from '../data/employee.json'
import Head from 'next/head'
import { useState } from 'react'
import Link from 'next/link'
import Card from '../components/Card'

export default function About() {
    console.log(data);
    const [information, setInformation] = useState([...data])

    return (
        <>
            <main>
                <div className={styles.description}>
                    <p>
                        <Link href="/">Main</Link>
                    </p>
                </div>
                <div className={styles.title}>Employee information</div>
                <div className={styles.main}>
                    {
                    information && information.map((info,index) => {
                        if(info.graduted===2018)
                        return(
                        <div  className={styles.card}>
                         <Card
                         key={index}
                            number={info.staffNumber}
                            firstname={info.firstName} 
                            department={info.department}
                            degree={info.degree}
                            year={info.graduted} 
                            colour={"grey"} 
                            font="16px"/>   
                        </div>)
                        else{
                            return(
                                <div  className={styles.card}>
                                <Card key={index}
                                   number={info.staffNumber}
                                   firstname={info.firstName} 
                                   department={info.department}
                                   degree={info.degree}
                                   year={info.graduted} 
                                   colour={"lightblue"} 
                                   font="16px"/>
                                   </div>   
                               )
                        }
                    }
                    
                    )
                    }
                </div>
            </main>
        </>
    )
}