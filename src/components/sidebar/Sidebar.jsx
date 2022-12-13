import './Sidebar.css'
import logo from '../../assets/logo.png'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt="logo" />
                    <h1>VitorGuedes</h1>
                </div>

                <i onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id='sidebarIcon'
                    aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i class="fa-solid fa-house"></i>
                    <a href="#">HOME</a>
                </div>
                <h2>ADMIN</h2>
                <div className='sidebar_link'>
                    <i className='fa fa-tachometer'></i>
                    <a href="#">Area Administrativa</a>
                </div>
                <div className='sidebar_link'>
                    <i className='fa fa-building'></i>
                    <a href="#">Lojas</a>
                </div>
                <div className='sidebar_link'>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <a href="#">Produtos</a>
                </div>
                <div className='sidebar_link'>
                    <i className='fa fa-bars'></i>
                    <a href="#">Categorias</a>
                </div>
                <div className='sidebar_link'>
                    <i class="fa-solid fa-folder"></i>
                    <a href="#">Pedidos</a>
                </div>
                <h2>PESSOAS</h2>
                <div className='sidebar_link'>
                    <i className='fa fa-male'></i>
                    <a href="#">Administradores</a>
                </div>
                <div className='sidebar_link'>
                    <i className='fa fa-user-circle'></i>
                    <a href="#">Usuarios</a>
                </div>
                <div className='sidebar_link'>
                    <i class="fa-solid fa-coins"></i>
                    <a href="#">Pagamentos e Despesas</a>
                </div>
                <div className='sidebar_link'>
                    <i className='fa fa-tasks'></i>
                    <a href="#">Plataforma</a>
                </div>
                <div className='sidebar_link'>
                    <i className='fa fa-file-text'></i>
                    <a href="#">Politica de privacidade</a>
                </div>
                <div className='sidebar_logout'>
                    <i className='fa fa-power-off'></i>
                    <a href="#">Log out</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;