import React from 'react';
import NavBar from '../components/NavBar';
import createOrBrowse from '../assets/images/create-or-browse.png';
import browseAsset from '../assets/images/browse-asset.png';
import ProductValues from '../components/ProductValues';
import ProductCTA from '../components/ProductCTA';
import AppFooter from '../components/AppFooter';

export const Landing = () => {
    return (
        <div>
            <NavBar />
            <section style={{ marginTop: '-65px' }} className='panel'>
                <div style={{ width: '100%', height: '100%' }}>
                    <img
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            height: 'auto',
                            width: 'auto',
                            display: 'flex',
                        }}
                        src={createOrBrowse}
                        alt=''
                    />
                </div>
            </section>
            {/* <Hero>
                <div className='landing-hero__container flex-column'>
                    <h1>Stay Hungry. Stay Foolish.</h1>
                    <p>Learn from the hottest startups in the world.</p>
                    <div className='landing-hero__button'>
                        <Button></Button>
                    </div>
                </div>
            </Hero> */}
            {/* <ProductHowItWorks /> */}
            <ProductValues />
            <section className='panel'>
                <div className='panel-copy flex-column'>
                    <div>
                        <h2>The marketplace for custom merchandise</h2>
                        <p>
                            Vendi is a tech company that makes a marketplace for
                            custom vendors to find work and clients who seek
                            custom needs. With quick and vast market access, we
                            allow consumers to see the best price and quality of
                            custom goods out there and allow vendors to see
                            every needed custom job. Vendi creates a marketplace
                            with fast quotes in realtime saving hours of
                            research. .{' '}
                        </p>
                    </div>
                </div>
                <div style={{ width: '100%', height: '100%' }}>
                    <img
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            height: 'auto',
                            width: 'auto',
                        }}
                        src={browseAsset}
                        alt=''
                    />
                </div>
            </section>
            <ProductCTA />
            <AppFooter />
        </div>
    );
};
