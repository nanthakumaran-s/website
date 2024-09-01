import React from 'react'
import Image from 'next/image'

import { certs } from '../../data/certs.data'
import styles from './Certs.module.css'

const Certs = () => {
  return (
    <div className={styles.certs}>
        {certs.map((cert, i) => (
            <a className={styles.cert} key={i} href={cert.link} target="blank">
                <Image src={cert.img} alt={cert.name} className={styles.img} />
            </a>
        ))}
    </div>
  )
}

export default Certs