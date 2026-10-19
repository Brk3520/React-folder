import React from 'react'

type Props = {}

export default function card({ }: Props) {
    return (
        <div className="card-container">
            <div className="card">
                <h2>Susi</h2>
                <img src="https://picsum.photos/200/300" alt="Hero" />
                <p>made by Börki</p>
            </div>
        </div>
    )
}