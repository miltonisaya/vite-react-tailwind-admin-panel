import * as React from "react";

interface FooterProps {
    footerText: string;
}

const Footer:React.FC<FooterProps> = ({footerText})=>{
    return <div>{footerText}</div>
}

export default Footer;