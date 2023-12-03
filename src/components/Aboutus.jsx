import React from 'react'

const Aboutus = () => {
    return (
        <>
            <div className='active' >
                <h1 className='heading d-flex justify-content-center p-3 '> Facilities</h1>
                <div className='cardcontainer d-flex justify-content-around flex-wrap p-2' >
                    <div className='facility d-flex flex-column justify-content-center'>
                        <h1 className='d-flex justify-content-center my-3 '>Bus facility</h1>
                        <p>Our school providing a completly facilated bus <br /> services covering the entire area with <br /> different stops.</p>
                    </div>
                    <div className='facility d-flex flex-column justify-content-center'>
                        <h1 className='d-flex justify-content-center my-3 '>Play-ground</h1>
                        <p>A well facilated playgroud with diffrent <br /> equipments along with a trainer.</p>
                    </div>
                    <div className='facility d-flex flex-column justify-content-center'>
                        <h1 className='d-flex justify-content-center my-3 '>Positive-learning</h1>
                        <p>Our school have a highly educated staff <br /> with well Experience.</p>
                    </div>
                    <div className='facility d-flex flex-column justify-content-center'>
                        <h1 className='d-flex justify-content-center my-3 '>Smart Classrooms</h1>
                        <p>Well Cleaned and furnished classrooms with <br /> smart technologies and 24x7 camera surveillance </p>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Aboutus