import style from './TextAnimation.css';

const TextAnimation = () => {
  return (
    <div class="wrapper">
      <div class="static-txt">I'm a</div>
      <ul class="dynamic-txts">
        <li>
          <span>YouTuber</span>
        </li>
        <li>
          <span>Designer</span>
        </li>
        <li>
          <span>Developer</span>
        </li>
        <li>
          <span>Freelancer</span>
        </li>
      </ul>
    </div>
  );
};

export default TextAnimation;
