import { useState } from 'react'
import Nav from './Categories/Nav';
import Clothes from './Categories/Clothes';
import Accessories from './Categories/Accessories';
import Apartments from './Categories/Apartments';
import Electronics from './Categories/Electronics';
import House from './Categories/House';
import Rentals from './Categories/Rentals';
import Shoes from './Categories/Shoes';
import Vehicles from './Categories/Vehicles';

const Categories = () => {

    const [selected, setSelected] = useState('all');

    const renderContent = () => {
        switch (selected) {
            case 'clothes':
                return <Clothes random />;
            case 'accessories':
                return <Accessories random />;
            case 'apartments':
                return <Apartments random />;
            case 'electronics':
                return <Electronics random />;
            case 'house':
                return <House random />;
            case 'rentals':
                return <Rentals random />;
            case 'shoes':
                return <Shoes random />;
            case 'vehicles':
                return <Vehicles random />;
            case 'all':
            default:
                return (
                    <div className='p-4'>
                        <Clothes random />
                        <Electronics random />
                        <Accessories random />
                    </div>
                );
        }
    }

    return (
        <div>
            <section className='min-h-screen px-2'>
                <div className='py-10 '>
                    <h2 className='text-gray-900 text-3xl text-center mt-2 font-bold font-mono p-3'>BROWSE BY CATEGORY</h2>
                    <div className="max-w-screen-xl mx-auto">

                        {/* Nav category */}
                        <Nav onSelect={setSelected} />

                        <div>{renderContent()}</div>

                    </div>



                </div>
            </section>
        </div>
    )
}

export default Categories