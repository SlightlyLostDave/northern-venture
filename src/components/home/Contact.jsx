import AnimatedTitle from './AnimatedTitle';
import Button from '../common/Button';

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/images/home/contact-1.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/images/home/contact-2.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute w-60 top-1/2 right-0 md:right-10 lg:top-20 lg:w-80">
          {/* <ImageClipBox
            clipClass="absolute contact-clip-path-3 md:scale-125"
            src="/images/home/contact-3-partial.jpg"
          /> */}
          <ImageClipBox
            clipClass="contact-clip-path-3 md:scale-125"
            src="/images/home/contact-3.jpg"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">Contact</p>

          <AnimatedTitle
            title="Every Great Project <br /> Begins with a <br /> Conversation."
            className="!md:text-[6.2rem] w-full font-display !text-5xl !font-black !leading-[.9]"
          />

          <Button
            title="contact us"
            containerClass="mt-10 cursor-pointer"
            href="mailto:hello@northernventure.ca"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
