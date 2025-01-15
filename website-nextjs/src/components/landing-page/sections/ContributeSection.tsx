import Image from "next/image";
import {
  ArrowUpIcon,
  CircleOutlineIcon,
  ForkIcon,
  GithubIcon,
  StarIcon,
  UserIcon,
} from "@/assets/icons";

const Contribute = () => {
  return (
    <div className="text-navy bg-white pt-24 pb-8">
      <div className="mx-auto container px-4 lg:px-6">
        <div className="grid md:flex">
          <div className="w-full md:w-7/12">
            <div className="text-dark-grey text-xl leading-1.1 uppercase font-bold font-league mt-2.5 mb-4">
              contributions
            </div>
            <div className="text-[4rem] leading-1.1 font-league mb-2">
              <div className="font-bold">CHECK OUT OUR CODE,</div>
              <div className="font-bold">JOIN THE EFFORT!</div>
            </div>
            <h5 className="text-dark-grey max-w-lg">
              We accept community contributions for new benchmarks, new /
              updated solver versions, and feedback on the benchmarking
              methodology and metrics via our
              <span className="font-bold ml-1">GitHub repository</span>
              <span className="text-green-pop font-bold">.</span>
            </h5>
            <div className="grid justify-center md:flex md:justify-between text-black max-w-lg pt-1">
              <div className="py-9 text-center flex-1">
                <div className="font-bold flex items-center">
                  <UserIcon className="mr-2" />
                  <h5 className="font-bold">03</h5>
                </div>
                <p className="text-base text-left mt-2">Contributors</p>
              </div>
              <div className="py-9 text-center flex-1">
                <div className="font-bold flex items-center">
                  <CircleOutlineIcon className="mr-2" />
                  <h5 className="font-bold">05</h5>
                </div>
                <p className="text-base text-left mt-2">Issues</p>
              </div>
              <div className="py-9 text-center flex-1">
                <div className="font-bold flex items-center">
                  <StarIcon className="mr-2" />
                  <h5 className="font-bold">02</h5>
                </div>
                <p className="text-base text-left mt-2">Stars</p>
              </div>
              <div className="py-9 text-center flex-1">
                <div className="flex items-center">
                  <ForkIcon className="mr-2" />
                  <h5 className="font-bold">01</h5>
                </div>
                <p className="text-base text-left mt-2">Fork</p>
              </div>
            </div>
          </div>
          <div className="hidden md:block w-5/12">
            <Image
              className="w-full h-auto"
              src="/landing_page/contribution.png"
              alt="Contribution image"
              width={517}
              height={494}
            />
          </div>
        </div>

        <div className="mt-11 px-2 py-1.5 relative border-b border-teal border-opacity-50 flex justify-between">
          <div className="flex items-center gap-1 font-bold text-navy text-opacity-70">
            <GithubIcon />
            <h5>GITHUB REPOSITORY</h5>
          </div>
          <ArrowUpIcon className="text-black rotate-90 size-6 absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
};
export default Contribute;