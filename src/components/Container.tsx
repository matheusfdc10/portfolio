interface ContainerProps {
    children: React.ReactNode;
    bg?: boolean;
    heightFull?: boolean;
    id: string;
}

const Container: React.FC<ContainerProps> = ({ 
    children,
    bg,
    heightFull,
    id,
}) => {
    return (
        <section id={id} className={`${bg ? 'bg-dark-2' : 'bg-dark-1'} ${heightFull ? 'min-h-[100vh]' : ''} px-7 sm:px-12 pt-8 pb-20`}>
            <div className={`max-w-[1440px] m-auto ${heightFull ? 'min-h-[80vh]' : ''}  mt-20 grid`}>
                {children}
            </div>
        </section>
    )
}

export default Container;