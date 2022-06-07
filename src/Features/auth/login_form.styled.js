import styled from "styled-components";
import { Glass, GlassForm } from "../../Misc/themes";
export const LoginPageContainer = styled(Glass)`
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24;
`;

export const LoginFormWrapper = styled(GlassForm)`
  width: 60%;
  max-width: 400px;
  padding: 20px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OtpButtonConatiner = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 10px;
`;
