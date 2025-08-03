import React, { useState } from "react";
import styled from "styled-components";
import RoleBasedLayout from "../../components/RoleBaseLayout";
// ----- Fake Data -----
const badges = [
  {
    icon: "🥇",
    title: "Course Finisher",
    description: "Completed 5 courses",
    date: "2024-07-15",
  },
  {
    icon: "📘",
    title: "Quiz Master",
    description: "Scored 100% in 3 quizzes",
    date: "2024-07-10",
  },
];

const certificates = [
  {
    course: "React Basics",
    issuedDate: "2024-07-18",
    status: "Completed",
    downloadLink: "#",
  },
];

const pointsLog = [
  { action: "Quiz Completed", points: 50 },
  { action: "Assignment Submitted", points: 30 },
  { action: "Forum Participation", points: 20 },
];

const Container = styled.div`
  padding: 2rem;
  background-color: #f9fbfc;
  font-family: "Segoe UI", sans-serif;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: #333;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const Card = styled.div`
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 0.5rem;
    color: #222;
  }

  p {
    font-size: 1.3rem;
    font-weight: bold;
    color: #007acc;
  }
`;

const Section = styled.div`
  margin-bottom: 2.5rem;
`;

const BadgeGrid = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

const BadgeCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  padding: 1.2rem;
  border-radius: 10px;
  width: 220px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
  }

  h4 {
    margin-top: 0.5rem;
    margin-bottom: 0.3rem;
    color: #333;
  }

  p {
    font-size: 0.9rem;
    color: #666;
  }

  small {
    display: block;
    margin-top: 0.4rem;
    color: #999;
  }
`;

const CertificateCard = styled.div`
  background: #e7f0ff;
  padding: 1.2rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  border-left: 5px solid #007acc;

  h4 {
    margin-bottom: 0.4rem;
    color: #003366;
  }

  p {
    margin: 0.3rem 0;
    color: #444;
  }

  button {
    margin-top: 0.6rem;
    padding: 0.4rem 0.8rem;
    border: none;
    background-color: #007acc;
    color: white;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background-color: #005fa3;
    }
  }
`;

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  border-left: 2px solid #ccc;
  padding-left: 1rem;
`;

const TimelineItem = styled.li`
  margin-bottom: 0.8rem;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -1.1rem;
    top: 0.4rem;
    width: 10px;
    height: 10px;
    background-color: #007acc;
    border-radius: 50%;
  }

  color: #444;
`;

const FilterSort = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  select,
  input {
    padding: 0.5rem 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 1rem;
  }

  input {
    flex: 1;
    min-width: 250px;
  }
`;

const WalletList = styled.ul`
  padding-left: 1rem;

  li {
    margin-bottom: 0.6rem;
    color: #444;
    font-weight: 500;
  }
`;

// ----- Component -----
const Rewards = () => {
  const [filter, setFilter] = useState("All");

  return (
    <RoleBasedLayout>
      <Container>
        <Heading>🏅 My Rewards & Achievements</Heading>

        {/* Summary */}
        <SummaryGrid>
          <Card>
            <h3>🏆 Total Badges</h3>
            <p>{badges.length}</p>
          </Card>
          <Card>
            <h3>🎓 Certificates</h3>
            <p>{certificates.length}</p>
          </Card>
          <Card>
            <h3>💰 Points Earned</h3>
            <p>100</p>
          </Card>
          <Card>
            <h3>🔥 Learning Streak</h3>
            <p>7 days</p>
          </Card>
          <Card>
            <h3>🌟 Highest Rank</h3>
            <p>Top 10%</p>
          </Card>
        </SummaryGrid>

        {/* Filters */}
        <FilterSort>
          <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option>All</option>
            <option>Badges</option>
            <option>Certificates</option>
            <option>Points</option>
          </select>
          <input type="text" placeholder="Search badges/certificates..." />
        </FilterSort>

        {/* Badge Section */}
        {(filter === "All" || filter === "Badges") && (
          <Section>
            <h2>🏷️ Badges</h2>
            <BadgeGrid>
              {badges.map((badge, i) => (
                <BadgeCard key={i}>
                  <div style={{ fontSize: "2rem" }}>{badge.icon}</div>
                  <h4>{badge.title}</h4>
                  <p>{badge.description}</p>
                  <small>📅 {badge.date}</small>
                </BadgeCard>
              ))}
            </BadgeGrid>
          </Section>
        )}

        {/* Certificates */}
        {(filter === "All" || filter === "Certificates") && (
          <Section>
            <h2>🎖️ Certificates</h2>
            {certificates.map((cert, i) => (
              <CertificateCard key={i}>
                <h4>📘 {cert.course}</h4>
                <p>Status: {cert.status}</p>
                <p>📅 Issued: {cert.issuedDate}</p>
                <button>📄 Download PDF</button>
              </CertificateCard>
            ))}
          </Section>
        )}

        {/* Points Wallet */}
        {(filter === "All" || filter === "Points") && (
          <Section>
            <h2>💸 Points Wallet</h2>
            <WalletList>
              {pointsLog.map((entry, i) => (
                <li key={i}>
                  {entry.action}: +{entry.points} pts
                </li>
              ))}
            </WalletList>
          </Section>
        )}

        {/* Streak */}
        <Section>
          <h2>🔥 Learning Streak</h2>
          <p>
            You’ve been active for <strong>7 days</strong> straight. Keep it up!
          </p>
        </Section>

        {/* Timeline */}
        <Section>
          <h2>📅 Achievements Timeline</h2>
          <Timeline>
            <TimelineItem>2024-07-20: Earned “JS Pro” Badge</TimelineItem>
            <TimelineItem>
              2024-07-18: Downloaded Certificate for “React Basics”
            </TimelineItem>
          </Timeline>
        </Section>

        {/* Progress Toward Next Reward */}
        <Section>
          <h2>🎯 Next Reward</h2>
          <p>You need 2 more quizzes to earn the “Quiz Champion” badge!</p>
        </Section>

        {/* Motivation */}
        <Section>
          <h2>🌈 Motivation</h2>
          <p>You're just 3 badges away from Gold Tier!</p>
          <p>
            Next reward unlocks at <strong>1000 points</strong>
          </p>
        </Section>
      </Container>
    </RoleBasedLayout>
  );
};

export default Rewards;
