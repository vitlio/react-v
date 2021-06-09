import React from 'react'
import style from './loading.module.css'

export default function Loading() {
    return (
        <div className={style.loading}><div className={style.ldsRing}><div></div><div></div><div></div><div></div></div></div>
    )
}