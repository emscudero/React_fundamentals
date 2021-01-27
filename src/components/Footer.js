const Footer = () => {

    let d = new Date();
    let y = d.getFullYear();

    return (
        
        <p>© { (new Date().getFullYear()) } </p>
    )
};

export default Footer;