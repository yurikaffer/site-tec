import { Box, Typography, useTheme } from "@mui/material";

interface ResumeItemProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
}

const ResumeItem: React.FC<ResumeItemProps> = ({ imgSrc, imgAlt, title, description }) => {
    const theme = useTheme();

    const imgStyle = {
        width: '7rem',
        [theme.breakpoints.down(555)]: {
            width: '5rem',
        },
    };

    const typographyBold = {
        fontSize: '2.0rem',
        fontWeight: '700',
        marginTop: '2.0rem',
        [theme.breakpoints.down(715)]: {
            fontSize: '1.6rem',
        },
    };

    const typography = {
        fontSize: '2.0rem',
        [theme.breakpoints.down(715)]: {
            fontSize: '1.4rem',
        },
    };

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Box sx={imgStyle}>
                <img src={imgSrc} alt={imgAlt} style={{ width: '100%' }} />
            </Box>
            <Typography sx={typographyBold}>{title}</Typography>
            <Typography sx={typography}>{description}</Typography>
        </Box>
    );
};

export default ResumeItem;