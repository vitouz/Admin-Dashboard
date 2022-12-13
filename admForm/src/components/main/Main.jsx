import hello from '../../assets/hello.png';
import Chart from '../charts/Chart'
import './Main.css';

const Main = () => {
    return (
        <main>
            <div className='main__container'>
                <div className='main__title'>
                    <img src={hello} alt='hello' />
                    <div className='main__greeting'>
                        <h1>Ola Vitor</h1>
                        <p>Bem vindo ao seu painel</p>
                    </div>
                </div>
                <div className='main_cards'>
                    <div className='card'>
                        <i className='fa fa-file-text fa-2x text-lightblue'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Numero de pedidos</p>
                            <span className='font-bold text-title'>250</span>
                        </div>
                    </div>

                    <div className='card'>
                    <i class="fa-solid fa-money-bill-trend-up text-red"></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Pagamentos</p>
                            <span className='font-bold text-title'>$2567</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-archive fa-2x text-yellow'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Numero de produtos</p>
                            <span className='font-bold text-title'>130</span>
                        </div>
                    </div>

                    <div className='card'>
                        <i className='fa fa-bars fa-2x text-green'></i>
                        <div className='card_inner'>
                            <p className='text-primary-p'>Categoria</p>
                            <span className='font-bold text-title'>40</span>
                        </div>
                    </div>
                </div>

                <div className='charts'>
                    <div className='charts__left'>
                        <div className='charts__left__title'>
                            <div>
                                <h1>Daily Reports</h1>\
                                <p>Elias Fausto, SP</p>
                            </div>
                            <i className='fa fa-usd'></i>
                        </div>
                        <Chart />
                    </div>

                    <div className='charts__right'>
                        <div className='charts__right__title'>
                            <div>
                                <h1>Daily Reports</h1>\
                                <p>Elias Fausto, SP</p>
                            </div>
                            <i class="fa-solid fa-comments-dollar"></i>
                        </div>

                        <div className='charts__right__title'>
                            <div className='card1'>
                                <h1>Lucro</h1>
                                <p>$5000</p>
                            </div>
                            <div className='card2'>
                                <h1>Pagamentos</h1>
                                <p>$500</p>
                            </div>
                            <div className='card3'>
                                <h1>Custo de hospedagem</h1>
                                <p>$150</p>
                            </div>
                            <div className='card4'>
                                <h1>Banco de dados</h1>
                                <p>$500</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;