import styled from "styled-components";

export const UserCard = (props) => {
  const { user } = props;
  return (
    <div>
      <img
        height={160}
        width={160}
        src="https://source.unsplash.com/NE0XGVKTmcA"
      />
      <p>
        <dl>
          <dt>メール</dt>
          <dd>1111@aaa.com</dd>
          <dt>TEL</dt>
          <dd>000-9999-1234</dd>
          <dt>会社名</dt>
          <dd>ああああ会社</dd>
          <dt>WEB</dt>
          <dd>htttttp:com</dd>
        </dl>
      </p>
    </div>
  );
};

const SDL = styled.dl`
  text-alingn: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
