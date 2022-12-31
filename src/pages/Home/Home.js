import React from 'react';
import icon1 from "../../Assets/Home/icon1.jpg";
import {BsArrowDown} from "react-icons/bs";
import {LazyLoadImage} from 'react-lazy-load-image-component'


const Home = () => {
    return (
        <section className='new'>
            <div className="container">
                <div className='new__content'>
                    <div className='new__content-left'>
                        <div class="carousel" aria-label="Gallery">
                            <ol class="carousel__viewport">
                                <li id="carousel__slide1"
                                    tabindex="0"
                                    class="carousel__slide">
                                    <h2 className='new__title'>Новые поступления <br/> в этом сезоне</h2>
                                    <p className='new__subtitle'>Утонченные сочетания и бархатные <br/>оттенки - вот то, что вы искали в этом <br/>сезоне. Время исследовать.</p>
                                    <div className='new__btns'>
                                        <button type='button' className='new__btn1'><BsArrowDown/></button>
                                        <button type='button' className='new__btn2'>Открыть магазин</button>
                                    </div>
                                    <div class="carousel__snapper">
                                        <a href="#carousel__slide3"
                                        class="carousel__prev">Go to last slide</a>
                                        <a href="#carousel__slide2"
                                        class="carousel__next">Go to next slide</a>
                                    </div>
                                </li>
                                <li id="carousel__slide2"
                                    tabindex="0"
                                    class="carousel__slide">
                                    <div class="carousel__snapper">
                                        <h2 className='new__title'>Что-то новенькое. <br/>Мы заждались тебя.</h2>
                                        <p className='new__subtitle'>Надоело искать себя в сером городе? <br/>Настало время новых идей, свежих красок <br/>и вдохновения с Womazing!</p>
                                        <div className='new__btns'>
                                            <button type='button' className='new__btn1'><BsArrowDown/></button>
                                            <button type='button' className='new__btn2'>Открыть магазин</button>
                                        </div>
                                    </div>
                                    <a href="#carousel__slide1"
                                        class="carousel__prev">Go to previous slide</a>
                                    <a href="#carousel__slide3"
                                        class="carousel__next">Go to next slide</a>
                                </li>
                                <li id="carousel__slide3"
                                    tabindex="0"
                                    class="carousel__slide">
                                    <div class="carousel__snapper">
                                        <h2 className='new__title'>Включай новый сезон <br/>с WOMAZING</h2>
                                        <p className='new__subtitle'>Мы обновили ассортимент - легендарные <br/>коллекции и новинки от <br/>отечественных дизайнеров</p>
                                        <div className='new__btns'>
                                            <button type='button' className='new__btn1'><BsArrowDown/></button>
                                            <button type='button' className='new__btn2'>Открыть магазин</button>
                                        </div>
                                    </div>
                                    <a href="#carousel__slide2"
                                        class="carousel__prev">Go to previous slide</a>
                                    <a href="#carousel__slide1"
                                        class="carousel__next">Go to first slide</a>
                                </li>
                            </ol>
                            <aside class="carousel__navigation">
                                <ol class="carousel__navigation-list">
                                    <li class="carousel__navigation-item">
                                        <a href="#carousel__slide1"
                                        class="carousel__navigation-button">Go to slide 1</a>
                                    </li>
                                    <li class="carousel__navigation-item">
                                        <a href="#carousel__slide2"
                                        class="carousel__navigation-button">Go to slide 2</a>
                                    </li>
                                    <li class="carousel__navigation-item">
                                        <a href="#carousel__slide3"
                                        class="carousel__navigation-button">Go to slide 3</a>
                                    </li>
                                </ol>
                            </aside>
                        </div>
                        <div className='slider'>
                            
                        </div>
                    </div>
                    <div className='new__content-right'>
                        <LazyLoadImage
                            alt='woman'
                            src={icon1}
                            effect='blur'
                            className='new__img'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;