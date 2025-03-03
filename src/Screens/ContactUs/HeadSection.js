import BlueParallogram from '../../Components/BlueParallogram/BlueParallogram';
import arrow_narrow_right from '../../assets/img/arrow-narrow-right.svg'


const HeadSection = () => {
    return (
        <>
            <div className="pt-5" >
                <div className="d-flex justify-content-center">

                    <BlueParallogram>
                        <div className="d-flex gap-3 align-items-baseline">
                            <p className="mb-0 text-blue font-poppins-500">Media center</p>
                        </div>
                    </BlueParallogram>
                </div>
                <p className=" fs-7vw text-center text-white mx-auto w-18ch mt-4" >Make your Online ReReservation</p>
                <p className='my-4 font-poppins fs-18 text-white-80 text-center w-50 mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>

                <div>
                    <ul className="d-flex gap-3 justify-content-center">
                        <button class="white-image-button text-nowrap px-5 text-blue font-poppins-500  bg-transparent border-0 text-center fs-16 d-inline-block">Pricing</button>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default HeadSection;