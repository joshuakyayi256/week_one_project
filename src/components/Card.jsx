import Button from './Button'

const Card =({icons,title,body,bgcolor,btnText}) => {
    return (
        <div className={bgcolor==='color1'||bgcolor==='color3'? `${bgcolor} card bradius`:`${bgcolor} card` }>

            <div className="content">
             <span>
                <img src={icons} alt={title} />
             </span>
              <h2>{title}</h2>
            <p>{body}</p>
            </div>
            <Button textColor={btnText}/>

        </div>
    );
}

export default Card