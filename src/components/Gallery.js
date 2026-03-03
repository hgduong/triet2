import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GalleryWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.bgDark};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const SectionNumber = styled.span`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accentLight};
  background: ${({ theme }) => theme.colors.accent}20;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 600;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.textWhite};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary}90,
      ${({ theme }) => theme.colors.secondary}90
    );
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.normal};
    z-index: 1;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: ${({ $color }) => $color || 'linear-gradient(135deg, #1a365d, #2c5282)'};
  transition: transform ${({ theme }) => theme.transitions.slow};
  
  ${GalleryItem}:hover & {
    transform: scale(1.1);
  }
`;

const GalleryOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing.lg};
  z-index: 2;
  transform: translateY(100%);
  transition: transform ${({ theme }) => theme.transitions.normal};
  
  ${GalleryItem}:hover & {
    transform: translateY(0);
  }
`;

const GalleryLabel = styled.span`
  color: ${({ theme }) => theme.colors.textWhite};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const IconCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-5px);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const IconTitle = styled.h4`
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: ${({ theme }) => theme.fontSizes.base};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const IconDescription = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin: 0;
`;

// Gallery items data
const galleryItems = [
  { icon: '📚', label: 'Giáo trình', color: 'linear-gradient(135deg, #1a365d, #2c5282)' },
  { icon: '⚖️', label: 'Quy luật kinh tế', color: 'linear-gradient(135deg, #c53030, #e53e3e)' },
  { icon: '💰', label: 'Hàng hóa & Tiền tệ', color: 'linear-gradient(135deg, #d69e2e, #ecc94b)' },
  { icon: '🏭', label: 'Sản xuất', color: 'linear-gradient(135deg, #38a169, #48bb78)' },
  { icon: '📊', label: 'Thị trường', color: 'linear-gradient(135deg, #3182ce, #4299e1)' },
  { icon: '🏦', label: 'Tư bản', color: 'linear-gradient(135deg, #553c9a, #6b46c1)' },
  { icon: '🌐', label: 'Hội nhập', color: 'linear-gradient(135deg, #dd6b20, #ed8936)' },
  { icon: '🇻🇳', label: 'Việt Nam', color: 'linear-gradient(135deg, #c53030, #d63e3e)' },
];

// Icon cards data
const iconCards = [
  { icon: '🔍', title: 'Phân tích', description: 'Nghiên cứu quy luật kinh tế' },
  { icon: '📈', title: 'Phát triển', description: 'Lực lượng sản xuất' },
  { icon: '⚙️', title: 'Cơ chế', description: 'Vận hành thị trường' },
  { icon: '🎯', title: 'Định hướng', description: 'XHCN ở Việt Nam' },
  { icon: '💼', title: 'Doanh nghiệp', description: 'Các thành phần KT' },
  { icon: '🤝', title: 'Hợp tác', description: 'Hội nhập quốc tế' },
  { icon: '📊', title: 'Thống kê', description: 'Dữ liệu kinh tế' },
  { icon: '🔬', title: 'Nghiên cứu', description: 'Lý thuyết Mác-Lênin' },
];

const Gallery = () => {
  return (
    <GalleryWrapper id="gallery">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionNumber>THƯ VIỆN</SectionNumber>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hình ảnh & Minh họa
          </SectionTitle>
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Các khái niệm và sơ đồ minh họa cho môn học Triết 2
          </SectionDescription>
        </SectionHeader>

        <GalleryGrid>
          {galleryItems.map((item, index) => (
            <GalleryItem
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <GalleryImage $color={item.color}>
                {item.icon}
              </GalleryImage>
              <GalleryOverlay>
                <GalleryLabel>{item.label}</GalleryLabel>
              </GalleryOverlay>
            </GalleryItem>
          ))}
        </GalleryGrid>

        <IconGrid>
          {iconCards.map((card, index) => (
            <IconCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
            >
              <IconWrapper>{card.icon}</IconWrapper>
              <IconTitle>{card.title}</IconTitle>
              <IconDescription>{card.description}</IconDescription>
            </IconCard>
          ))}
        </IconGrid>
      </Container>
    </GalleryWrapper>
  );
};

export default Gallery;
