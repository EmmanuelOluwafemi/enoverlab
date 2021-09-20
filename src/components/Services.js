import {Link} from 'react-router-dom';

import beginner from "../assets/img/beginner.jpg";
import intermediate from "../assets/img/intermediate.jpg";
import community from "../assets/img/community.jpg";

import styled from "styled-components";

import { IoIosArrowRoundForward } from 'react-icons/io';

const data = [
    {
        imgUrl: beginner,
        title: "BEGINNER",
        headTitle: "TRAINING AND MENTORSHIP",
    },
    {
        imgUrl: intermediate,
        title: "INTERMEDIATE",
        headTitle: "TRAINING AND MENTORSHIP",
    },
    {
        imgUrl: community,
        title: "COMMUNITY",
        link: "https://chat.whatsapp.com/Jny8eNbllbQFiXDqSafxBV"
    },
]

const Card = ({ imgUrl, title, headTitle, i, link }) => {
    return (
        <StyledCard
            data-aos="fade-left" 
            data-aos-easing="ease-in-sine"
            data-aos-duration="500" 
            data-aos-delay={300 * i}
        >
            <img src={imgUrl} alt={title} />
            <div className="content">
                <h6>{headTitle}</h6>
                <h1>{title}</h1>
            </div>

            {
                !link ?
                <Link to="/pricing">
                    See Pricing
                    <IoIosArrowRoundForward className="icon" />
                </Link>:
                <a href={link}>Join Community</a>
            }
        </StyledCard>
    )
}

const Services = () => {
    return (
        <StyledServices id="pricing">
            <h3 
                data-aos="fade-top" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500"
            >SERVICES WE OFFER</h3>
            <h1
                data-aos="fade-top" 
                data-aos-easing="ease-in-sine"
                data-aos-duration="500" 
                data-aos-delay="300"
            >Here at enoverlab,</h1>
            <div className="card-grid">
                {
                    data.map(({ imgUrl, title, headTitle, link }, i) => (
                        <Card
                            i={i} 
                            key={imgUrl}
                            imgUrl={imgUrl}
                            title={title}
                            headTitle={headTitle}
                            link={link}
                        />
                    ))
                }
            </div>
        </StyledServices>
    )
}

export default Services

const StyledServices = styled.section`
    width: 100%;
    padding: 3rem 6%;
    background: rgba(82, 222, 229, 0.05);
    padding-top: 4.5rem;
    overflow-x: hidden;

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #52DEE5;
        text-align: center;
        margin-bottom: 1rem;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }

    h1 {
        text-align: center;
        font-size: 3.125rem;
        font-weight: 900;
        font-family: 'nexablack', sans-serif;
        color: #090C9B;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    .card-grid {
        width: 100%;
        margin-top: 3rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, 1fr);
            grid-gap: 4rem;
        }
    }
`;

const StyledCard = styled.div`
    width: 100%;
    position: relative;

    img {
        width: 100%;
        height: auto;
    }

    .content {
        position: absolute;
        bottom: 3rem;
        left: 2rem;

        h6 {
            font-size: .75rem;
            font-weight: 400;
            color: #52DEE5;
            margin-bottom: 1.2rem;
        }

        h1 {
            font-size: 2rem;
            color: #fff;
        }
    }

    a {
        position: absolute;
        bottom: -.8rem;
        left: 2rem;
        font-size: 1rem;
        color: #090C9B;
        line-height: 104%;
        letter-spacing: 0.02em;
        padding: 1rem 0;
        background: #52DEE5;
        box-shadow: 0px 0px 30px rgba(65, 135, 123, 0.25);
        display: inline-block;
        margin-top: 2rem;
        text-decoration: none;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 195px;

        .icons {
            margin-left: .8rem;
            font-size: 1.5rem;
        }

        &:hover {
            background: rgba(9, 12, 155, 0.7);
            color: #fff;
        }
    }
`;