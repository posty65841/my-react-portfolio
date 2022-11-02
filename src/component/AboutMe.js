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

function AboutMe() {
    return (
        <div>
           <section >
            
            <h2>About me </h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi maxime at, qui et id distinctio.
                Omnis, recusandae officia vitae quas minus cumque fuga mollitia dolore expedita laborum. Molestiae,
                sequi corrupti?
            </p>
        </section>

        </div>
    );
}

export default AboutMe;