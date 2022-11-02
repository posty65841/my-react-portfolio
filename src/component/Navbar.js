
const styles = {
    nav: {

        justifyContent: "flex-left",

        display: "flex",
        listStyleType: "none"


    },
    header: {
        padding: "20px",
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        backgroundColor: 'black',
        color: "white",

    },
  

}

function Navbar() {
    return (
        <div>
            <header style={styles.header}>
        <h1>Austin's Portfolio
        </h1>
        <nav style={styles.nav}>
            <ul>
                <li>
                    <a href="#About-Me ">About Me </a>
                </li>
                <li>
                    <a href="#Contact-Info">Contact Me</a>
                </li>
                <li>

                    <a href="#My-Work">My work </a>
                </li>
                <li>
                    <a href="#Resume"> Resume </a>
                </li>
            </ul>
        </nav>
    </header>


        </div>
    );
}

export default Navbar;


