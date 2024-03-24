
const Level2 = ({leveltwo}) => {
    const {category,title,owner,thumbnail} = leveltwo;
    return (
        <div>
            <h1>{category}</h1>
            <h2>{title}</h2>
            <h3>{owner}</h3>
            <img className="h-[300px] w-[300px]" src={thumbnail} />
        </div>
    );
};

export default Level2;