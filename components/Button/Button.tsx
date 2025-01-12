
import { Button as UiButton } from "../ui/button";
const Button = () => {
  return (
    <>
    <div className="text-center pb-3 pt-3">
    <UiButton
      variant={"custom"}
      size={"default"}
      className="px-6 text-[14px] sm:text-[15px] sm:px-8"
    >
      View All Products
    </UiButton>
  </div>
  </>
  )
}

export default Button

  