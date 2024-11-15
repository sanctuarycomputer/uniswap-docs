import React, { FC } from 'react'

import cn from 'classnames'

export const MiniUnicon: FC<{
  className?: string
  color?: 'accent-1' | 'neutral-1'
}> = ({ className, color = 'accent-1' }) => {
  return (
    <svg className={cn('MiniUnicon', className)} viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M32.1304 9.55767C30.947 9.37684 30.8971 9.35561 31.454 9.27131C32.5212 9.10963 35.0413 9.32997 36.7779 9.73674C40.8321 10.686 44.5213 13.1178 48.4591 17.4366L49.5053 18.5839L51.0019 18.3469C57.3068 17.3489 63.7208 18.1421 69.0855 20.5832C70.5613 21.2548 72.8883 22.5917 73.179 22.9353C73.2716 23.0448 73.4417 23.7495 73.5569 24.5016C73.9554 27.1034 73.7559 29.0978 72.9481 30.5873C72.5084 31.3979 72.4839 31.6548 72.7794 32.3485C73.0154 32.9021 73.6732 33.3118 74.3245 33.3109C75.6577 33.3091 77.0927 31.1863 77.7575 28.2325L78.0216 27.0592L78.5448 27.643C81.4146 30.8457 83.6686 35.2134 84.0558 38.3224L84.1566 39.133L83.6743 38.3961C82.8441 37.128 82.01 36.2648 80.9418 35.5686C79.0164 34.3137 76.9805 33.8866 71.5888 33.6067C66.7192 33.3539 63.9632 32.9442 61.2304 32.0664C56.5808 30.5732 54.2369 28.5845 48.7138 21.4466C46.2606 18.2762 44.7443 16.5221 43.236 15.1094C39.8088 11.8997 36.4412 10.2163 32.1304 9.55767Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
      <path
        d="M74.2773 16.6364C74.3999 14.512 74.6924 13.1107 75.2804 11.831C75.5131 11.3244 75.7312 10.9099 75.7649 10.9099C75.7986 10.9099 75.6974 11.2838 75.54 11.7406C75.1125 12.9826 75.0423 14.6813 75.3368 16.6577C75.7106 19.1653 75.9232 19.5271 78.6139 22.236C79.8759 23.5065 81.3439 25.109 81.876 25.7969L82.8437 27.0479L81.876 26.1539C80.6928 25.0606 77.9714 22.9285 77.3703 22.6237C76.9673 22.4193 76.9073 22.4228 76.6587 22.6666C76.4296 22.8912 76.3813 23.2287 76.3495 24.8242C76.3 27.3109 75.956 28.9071 75.1254 30.503C74.6763 31.3662 74.6055 31.182 75.012 30.2077C75.3154 29.4802 75.3462 29.1604 75.344 26.7531C75.3393 21.9163 74.7564 20.7535 71.3376 18.7615C70.4716 18.2569 69.0446 17.5291 68.1666 17.1441C67.2886 16.7592 66.5912 16.4239 66.6166 16.3989C66.7134 16.3039 70.0474 17.2625 71.3893 17.771C73.3854 18.5273 73.7149 18.6253 73.9573 18.5341C74.1198 18.4729 74.1984 18.0068 74.2773 16.6364Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
      <path
        d="M34.4292 24.9109C32.0267 21.6528 30.5402 16.6574 30.862 12.9231L30.9615 11.7675L31.5084 11.8658C32.5354 12.0503 34.3061 12.6995 35.1353 13.1956C37.4106 14.5568 38.3957 16.3489 39.3978 20.9508C39.6914 22.2987 40.0765 23.8241 40.2537 24.3405C40.539 25.1717 41.6171 27.1133 42.4936 28.3743C43.1249 29.2824 42.7056 29.7128 41.31 29.5887C39.1787 29.3992 36.2917 27.4365 34.4292 24.9109Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
      <path
        d="M71.3633 49.1593C60.1356 44.7064 56.1812 40.8412 56.1812 34.3196C56.1812 33.3598 56.2148 32.5746 56.2557 32.5746C56.2965 32.5746 56.7309 32.8913 57.221 33.2785C59.4977 35.0772 62.0472 35.8455 69.1052 36.8598C73.2585 37.4567 75.5958 37.9387 77.7518 38.6431C84.6046 40.8818 88.8445 45.4249 89.8555 51.6129C90.1494 53.4109 89.9771 56.7828 89.5007 58.5599C89.1247 59.9635 87.9771 62.4936 87.6727 62.5905C87.5884 62.6175 87.5056 62.2989 87.4839 61.8654C87.3685 59.5419 86.1765 57.2797 84.1746 55.5852C81.8985 53.6586 78.8404 52.1247 71.3633 49.1593Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
      <path
        d="M63.4811 51.0092C63.3404 50.1846 63.0964 49.1316 62.9389 48.6691L62.6524 47.8283L63.1845 48.4167C63.9209 49.2308 64.5028 50.2726 64.996 51.6602C65.3724 52.7192 65.4148 53.0342 65.4119 54.7551C65.4091 56.4447 65.362 56.7988 65.0145 57.7521C64.4664 59.2552 63.7862 60.3211 62.6449 61.4652C60.5939 63.5212 57.9571 64.6596 54.1519 65.1318C53.4905 65.2137 51.5627 65.352 49.8679 65.4388C45.5968 65.6577 42.7857 66.1097 40.2597 66.9833C39.8966 67.109 39.5723 67.1854 39.5394 67.153C39.4372 67.0528 41.157 66.0429 42.5775 65.3689C44.5805 64.4185 46.5743 63.8999 51.0416 63.1671C53.2484 62.805 55.5274 62.3658 56.1061 62.191C61.571 60.5405 64.3801 56.2813 63.4811 51.0092Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
      <path
        d="M68.628 60.013C67.1362 56.8543 66.7936 53.8044 67.6109 50.9601C67.6984 50.6562 67.8389 50.4075 67.9236 50.4075C68.008 50.4075 68.3601 50.5949 68.7057 50.824C69.3931 51.2798 70.7718 52.0475 74.4448 54.0202C79.0283 56.4817 81.6416 58.3877 83.4186 60.5654C84.975 62.4726 85.9381 64.6446 86.4017 67.2933C86.6641 68.7936 86.5103 72.4036 86.1195 73.9144C84.8872 78.678 82.0231 82.4198 77.938 84.6032C77.3395 84.923 76.8022 85.1857 76.744 85.1869C76.6859 85.188 76.904 84.6418 77.2287 83.973C78.6029 81.1434 78.7594 78.3909 77.7204 75.3272C77.0842 73.4514 75.7872 71.1624 73.1683 67.2939C70.1235 62.7961 69.377 61.5991 68.628 60.013Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
      <path
        d="M26.4558 77.0564C30.6223 73.5911 35.8064 71.1292 40.5287 70.3736C42.5638 70.0479 45.9541 70.1772 47.8386 70.6523C50.8594 71.4138 53.5617 73.1194 54.967 75.1515C56.3404 77.1376 56.9297 78.8683 57.5431 82.719C57.7851 84.238 58.0483 85.7634 58.128 86.1087C58.5887 88.1044 59.4852 89.6996 60.5962 90.5008C62.3608 91.7729 65.3993 91.8521 68.3884 90.7035C68.8957 90.5086 69.3361 90.3739 69.3671 90.4042C69.4754 90.5103 67.9703 91.5028 66.9085 92.0252C65.4797 92.7282 64.3436 93 62.834 93C60.0964 93 57.8236 91.6282 55.9271 88.8311C55.5538 88.2806 54.715 86.6318 54.0629 85.1671C52.0606 80.6684 51.0718 79.2979 48.7468 77.798C46.7235 76.493 44.1142 76.2592 42.1512 77.2073C39.5726 78.4527 38.8532 81.6985 40.7 83.7555C41.434 84.573 42.8028 85.2782 43.9221 85.4153C46.016 85.6719 47.8154 84.1027 47.8154 82.0203C47.8154 80.6682 47.2878 79.8965 45.9596 79.3061C44.1456 78.4998 42.1957 79.4423 42.205 81.121C42.2091 81.8368 42.5255 82.2863 43.2539 82.611C43.7213 82.8192 43.7321 82.8357 43.351 82.7578C41.6866 82.4178 41.2966 80.4412 42.6349 79.129C44.2416 77.5538 47.5641 78.2488 48.705 80.3991C49.1844 81.3022 49.24 83.101 48.8221 84.187C47.8869 86.6181 45.1598 87.8964 42.3934 87.2008C40.5099 86.7271 39.743 86.2142 37.4721 83.9103C33.5261 79.9063 31.9942 79.1304 26.3055 78.2556L25.2153 78.088L26.4558 77.0564Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.94072 5.39491C21.1185 21.1494 30.1946 27.6495 31.2033 29.0228C32.036 30.1567 31.7226 31.1761 30.2959 31.9751C29.5026 32.4193 27.8715 32.8694 27.0548 32.8694C26.1311 32.8694 25.814 32.5184 25.814 32.5184C25.2784 32.018 24.9767 32.1055 22.2264 27.2966C18.408 21.4603 15.2126 16.6189 15.1254 16.5379C14.9238 16.3504 14.9273 16.3568 21.8371 28.5351C22.9535 31.0734 22.0591 32.0051 22.0591 32.3666C22.0591 33.1021 21.8554 33.4886 20.9344 34.5005C19.3991 36.1877 18.7128 38.0835 18.2173 42.0069C17.6619 46.4049 16.1001 49.5117 11.7718 54.8288C9.23824 57.9413 8.82367 58.5118 8.18437 59.7663C7.37912 61.3461 7.1577 62.2309 7.06796 64.2259C6.97311 66.335 7.15784 67.6975 7.81203 69.7141C8.38474 71.4796 8.98255 72.6453 10.5108 74.977C11.8297 76.9892 12.5891 78.4845 12.5891 79.0694C12.5891 79.5349 12.6793 79.5355 14.723 79.0809C19.6139 77.993 23.5853 76.0796 25.8189 73.7348C27.2012 72.2834 27.5257 71.4819 27.5363 69.4931C27.5432 68.1921 27.4967 67.9198 27.1397 67.1714C26.5586 65.9533 25.5007 64.9405 23.1689 63.3703C20.1137 61.3131 18.8088 59.6568 18.4484 57.3791C18.1527 55.5102 18.4957 54.1916 20.1859 50.7022C21.9353 47.0904 22.3688 45.5513 22.6621 41.9108C22.8515 39.5587 23.1138 38.6311 23.7998 37.8866C24.5153 37.1102 25.1594 36.8473 26.9302 36.6089C29.817 36.2205 31.6553 35.4847 33.1663 34.1132C34.477 32.9234 35.0255 31.777 35.1097 30.0512L35.1736 28.743L34.4411 27.9018C31.7884 24.8552 6.16425 3 6.00101 3C5.96614 3 6.83904 4.07778 7.94072 5.39491ZM14.0782 66.6124C14.6779 65.5661 14.3593 64.221 13.3561 63.564C12.4081 62.9431 10.9356 63.2355 10.9356 64.0446C10.9356 64.2915 11.0742 64.4711 11.3866 64.6295C11.9125 64.8961 11.9507 65.1959 11.5369 65.8086C11.1178 66.429 11.1516 66.9746 11.6324 67.3453C12.4071 67.9429 13.5038 67.6142 14.0782 66.6124Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.9954 37.2951C35.6402 37.7051 34.3228 39.12 33.915 40.6035C33.6662 41.5086 33.8074 43.0961 34.18 43.5865C34.782 44.3783 35.3642 44.587 36.9406 44.5761C40.0269 44.5549 42.7099 43.251 43.0218 41.621C43.2775 40.2849 42.0992 38.4332 40.476 37.6203C39.6385 37.201 37.8572 37.0346 36.9954 37.2951ZM40.6034 40.0741C41.0793 39.408 40.8711 38.688 40.0616 38.2011C38.5201 37.2739 36.189 38.0412 36.189 39.4756C36.189 40.1897 37.4046 40.9687 38.5189 40.9687C39.2606 40.9687 40.2755 40.5331 40.6034 40.0741Z"
        className={cn({
          'fill-light-accent-1 dark:fill-dark-accent-1': color === 'accent-1',
          'fill-light-neutral-1 dark:fill-dark-neutral-1': color === 'neutral-1',
        })}
      />
    </svg>
  )
}

export const Github: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 12C21 15.99 18.4 19.36 14.81 20.55C14.38 20.62 14.23 20.35 14.23 20.12C14.23 19.82 14.24 18.85 14.24 17.65C14.24 16.81 13.95 16.26 13.63 15.98C15.63 15.76 17.74 15 17.74 11.54C17.74 10.56 17.39 9.76 16.81 9.13C16.91 8.9 17.22 7.97999 16.73 6.73999C16.73 6.73999 15.97 6.50001 14.25 7.67001C13.53 7.47001 12.76 7.36999 12 7.35999C11.23 7.36999 10.46 7.47001 9.75 7.67001C8.03 6.50001 7.27002 6.73999 7.27002 6.73999C6.78002 7.97999 7.08999 8.9 7.17999 9.13C6.60999 9.76 6.26001 10.56 6.26001 11.54C6.26001 14.99 8.35999 15.76 10.36 15.99C10.1 16.21 9.86998 16.61 9.78998 17.19C9.26998 17.42 7.96998 17.82 7.16998 16.44C7.16998 16.44 6.68998 15.58 5.78998 15.52C5.78998 15.52 4.90998 15.51 5.72998 16.06C5.72998 16.06 6.31998 16.34 6.72998 17.38C6.72998 17.38 7.25001 18.99 9.76001 18.44C9.76001 19.19 9.77002 19.9 9.77002 20.12C9.77002 20.34 9.61 20.62 9.19 20.55C5.6 19.37 3 15.99 3 12C3 7.03 7.03 3 12 3C16.97 3 21 7.03 21 12Z"
        className={cn('transition-all', {
          'fill-light-neutral-2 group-hover:fill-light-neutral-1 dark:fill-dark-neutral-2 group-hover:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const X: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.1682 4H19.9268L13.9001 10.8881L20.99 20.2613H15.4386L11.0906 14.5765L6.1155 20.2613H3.35525L9.80139 12.8937L3 4H8.69229L12.6225 9.19611L17.1682 4ZM16.2 18.6102H17.7286L7.86171 5.56442H6.22141L16.2 18.6102Z"
        className={cn('transition-all', {
          'fill-light-neutral-2 group-hover:fill-light-neutral-1 dark:fill-dark-neutral-2 group-hover:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const Discord: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.95 6.26001C17.65 5.67001 16.26 5.24 14.82 5C14.64 5.31 14.44 5.73 14.3 6.06C12.76 5.84 11.24 5.84 9.72001 6.06C9.58001 5.73 9.37002 5.31 9.20002 5C7.75002 5.24 6.36001 5.67001 5.07001 6.26001C2.45001 10.08 1.74001 13.81 2.10001 17.49C3.84001 18.74 5.52002 19.5 7.17002 20C7.57002 19.46 7.94 18.88 8.25 18.27C7.65 18.05 7.08001 17.78 6.54001 17.46C6.68001 17.36 6.82002 17.25 6.95002 17.14C10.24 18.63 13.82 18.63 17.07 17.14C17.21 17.25 17.34 17.36 17.48 17.46C16.94 17.78 16.37 18.05 15.77 18.27C16.08 18.88 16.45 19.46 16.85 20C18.5 19.5 20.19 18.74 21.92 17.49C22.36 13.23 21.23 9.53001 18.97 6.26001H18.95ZM8.68 15.17C7.69 15.17 6.88001 14.27 6.88001 13.17C6.88001 12.07 7.67 11.17 8.68 11.17C9.69 11.17 10.5 12.07 10.48 13.17C10.48 14.27 9.68 15.17 8.68 15.17ZM15.32 15.17C14.33 15.17 13.52 14.27 13.52 13.17C13.52 12.07 14.31 11.17 15.32 11.17C16.33 11.17 17.14 12.07 17.12 13.17C17.12 14.27 16.33 15.17 15.32 15.17Z"
        className={cn('transition-all', {
          'fill-light-neutral-2 group-hover:fill-light-neutral-1 dark:fill-dark-neutral-2 group-hover:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const Sun: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2': color === 'neutral-2',
        })}
        d="M11 8C11 9.654 9.654 11 8 11C6.346 11 5 9.654 5 8C5 6.346 6.346 5 8 5C9.654 5 11 6.346 11 8ZM8.5 3.33333V2C8.5 1.724 8.276 1.5 8 1.5C7.724 1.5 7.5 1.724 7.5 2V3.33333C7.5 3.60933 7.724 3.83333 8 3.83333C8.276 3.83333 8.5 3.60933 8.5 3.33333ZM8.5 14V12.6667C8.5 12.3907 8.276 12.1667 8 12.1667C7.724 12.1667 7.5 12.3907 7.5 12.6667V14C7.5 14.276 7.724 14.5 8 14.5C8.276 14.5 8.5 14.276 8.5 14ZM3.83333 8C3.83333 7.724 3.60933 7.5 3.33333 7.5H2C1.724 7.5 1.5 7.724 1.5 8C1.5 8.276 1.724 8.5 2 8.5H3.33333C3.60933 8.5 3.83333 8.276 3.83333 8ZM14.5 8C14.5 7.724 14.276 7.5 14 7.5H12.6667C12.3907 7.5 12.1667 7.724 12.1667 8C12.1667 8.276 12.3907 8.5 12.6667 8.5H14C14.276 8.5 14.5 8.276 14.5 8ZM5.054 5.054C5.24933 4.85866 5.24933 4.54199 5.054 4.34666L4.11133 3.40399C3.91599 3.20866 3.59933 3.20866 3.40399 3.40399C3.20866 3.59933 3.20866 3.91599 3.40399 4.11133L4.34666 5.054C4.44399 5.15133 4.57199 5.20066 4.69999 5.20066C4.82799 5.20066 4.956 5.15133 5.054 5.054ZM12.596 12.596C12.7913 12.4007 12.7913 12.084 12.596 11.8887L11.6533 10.946C11.458 10.7507 11.1413 10.7507 10.946 10.946C10.7507 11.1413 10.7507 11.458 10.946 11.6533L11.8887 12.596C11.986 12.6933 12.114 12.7427 12.242 12.7427C12.37 12.7427 12.4987 12.694 12.596 12.596ZM4.11133 12.596L5.054 11.6533C5.24933 11.458 5.24933 11.1413 5.054 10.946C4.85866 10.7507 4.54199 10.7507 4.34666 10.946L3.40399 11.8887C3.20866 12.084 3.20866 12.4007 3.40399 12.596C3.50133 12.6933 3.62932 12.7427 3.75732 12.7427C3.88532 12.7427 4.01333 12.694 4.11133 12.596ZM11.6533 5.054L12.596 4.11133C12.7913 3.91599 12.7913 3.59933 12.596 3.40399C12.4007 3.20866 12.084 3.20866 11.8887 3.40399L10.946 4.34666C10.7507 4.54199 10.7507 4.85866 10.946 5.054C11.0433 5.15133 11.1713 5.20066 11.2993 5.20066C11.4273 5.20066 11.5553 5.15133 11.6533 5.054Z"
      />
    </svg>
  )
}

export const Menu: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6C2 5.448 2.448 5 3 5H21C21.552 5 22 5.448 22 6C22 6.552 21.552 7 21 7H3C2.448 7 2 6.552 2 6ZM21 11H3C2.448 11 2 11.448 2 12C2 12.552 2.448 13 3 13H21C21.552 13 22 12.552 22 12C22 11.448 21.552 11 21 11ZM21 17H3C2.448 17 2 17.448 2 18C2 18.552 2.448 19 3 19H21C21.552 19 22 18.552 22 18C22 17.448 21.552 17 21 17Z"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2': color === 'neutral-2',
        })}
      />
    </svg>
  )
}

export const Moon: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2': color === 'neutral-2',
        })}
        d="M8.75534 1.33337C8.75734 1.33337 8.76001 1.33337 8.76201 1.33337C8.97468 1.33337 9.06667 1.59538 8.90667 1.73338C7.786 2.69804 7.17002 4.2147 7.48402 5.84937C7.83268 7.66337 9.32535 9.04403 11.182 9.29203C12.3547 9.4487 13.4407 9.15203 14.304 8.55937C14.4793 8.4387 14.712 8.59804 14.6594 8.80204C13.9234 11.6794 11.084 13.73 7.84467 13.268C5.15401 12.884 3.02935 10.7247 2.71068 8.06337C2.54402 6.67537 2.85933 5.36738 3.51333 4.28005C4.57333 2.51605 6.52401 1.33337 8.75534 1.33337Z"
      />
    </svg>
  )
}

export const Edit: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icon">
        <path
          id="Vector"
          d="M10.6667 14.5001H4C2.388 14.5001 1.5 13.6121 1.5 12.0001V5.33348C1.5 3.72148 2.388 2.83348 4 2.83348H6C6.276 2.83348 6.5 3.05748 6.5 3.33348C6.5 3.60948 6.276 3.83348 6 3.83348H4C2.94867 3.83348 2.5 4.28215 2.5 5.33348V12.0001C2.5 13.0515 2.94867 13.5001 4 13.5001H10.6667C11.718 13.5001 12.1667 13.0515 12.1667 12.0001V10.0001C12.1667 9.72415 12.3907 9.50015 12.6667 9.50015C12.9427 9.50015 13.1667 9.72415 13.1667 10.0001V12.0001C13.1667 13.6121 12.2787 14.5001 10.6667 14.5001ZM13.72 3.35348L12.6466 2.28016C12.2666 1.90682 11.66 1.90681 11.28 2.28681L10.38 3.19349L12.8067 5.62014L13.7133 4.72014C14.0933 4.34014 14.0933 3.73348 13.72 3.35348ZM9.67334 3.90015L5.33333 8.26016V10.6668H7.73999L12.1 6.32681L9.67334 3.90015Z"
          className={cn({
            'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/edit-icon:fill-light-neutral-1 group-hover/edit-icon:dark:fill-dark-neutral-1':
              color === 'neutral-2',
          })}
        />
      </g>
    </svg>
  )
}

export const Happy: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="9"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/happy:stroke-light-neutral-1 group-hover/happy:dark:stroke-dark-neutral-1 group-[.selected]/happy:fill-light-status-success-1 group-[.selected]/happy:dark:fill-dark-status-success-1 group-[.selected]/happy:stroke-light-neutral-1 group-[.selected]/happy:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
      />
      <circle
        cx="7"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/happy:fill-light-neutral-1 group-hover/happy:dark:fill-dark-neutral-1 group-[.selected]/happy:fill-light-neutral-1 group-[.selected]/happy:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <circle
        cx="13"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/happy:fill-light-neutral-1 group-hover/happy:dark:fill-dark-neutral-1 group-[.selected]/happy:fill-light-neutral-1 group-[.selected]/happy:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <path
        d="M6 12C6 12 7.29032 14 10 14C12.7097 14 14 12 14 12"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/happy:stroke-light-neutral-1 group-hover/happy:dark:stroke-dark-neutral-1 group-[.selected]/happy:stroke-light-neutral-1 group-[.selected]/happy:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const Neutral: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="9"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/neutral:stroke-light-neutral-1 group-hover/neutral:dark:stroke-dark-neutral-1 group-[.selected]/neutral:fill-light-status-warning-1 group-[.selected]/neutral:dark:fill-dark-status-warning-1 group-[.selected]/neutral:stroke-light-neutral-1 group-[.selected]/neutral:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
      />
      <circle
        cx="7"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/neutral:fill-light-neutral-1 group-hover/neutral:dark:fill-dark-neutral-1 group-[.selected]/neutral:fill-light-neutral-1 group-[.selected]/neutral:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <circle
        cx="13"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/neutral:fill-light-neutral-1 group-hover/neutral:dark:fill-dark-neutral-1 group-[.selected]/neutral:fill-light-neutral-1 group-[.selected]/neutral:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <path
        d="M7 13C7 13 7.96774 13 10 13C12.0323 13 13 13 13 13"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/neutral:stroke-light-neutral-1 group-hover/neutral:dark:stroke-dark-neutral-1 group-[.selected]/neutral:stroke-light-neutral-1 group-[.selected]/neutral:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export const Sad: FC<{
  className?: string
  color?: 'neutral-2'
}> = ({ className, color = 'neutral-2' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="none">
      <circle
        cx="10"
        cy="10"
        r="9"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/sad:stroke-light-neutral-1 group-hover/sad:dark:stroke-dark-neutral-1 group-[.selected]/sad:fill-light-status-critical-1 group-[.selected]/sad:dark:fill-dark-status-critical-1 group-[.selected]/sad:stroke-light-neutral-1 group-[.selected]/sad:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
      />
      <circle
        cx="7"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/sad:fill-light-neutral-1 group-hover/sad:dark:fill-dark-neutral-1 group-[.selected]/sad:fill-light-neutral-1 group-[.selected]/sad:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <circle
        cx="13"
        cy="8"
        r="1"
        className={cn({
          'fill-light-neutral-2 dark:fill-dark-neutral-2 group-hover/sad:fill-light-neutral-1 group-hover/sad:dark:fill-dark-neutral-1 group-[.selected]/sad:fill-light-neutral-1 group-[.selected]/sad:dark:fill-dark-neutral-1':
            color === 'neutral-2',
        })}
      />
      <path
        d="M14 13C14 13 12.7097 11 10 11C7.29032 11 6 13 6 13"
        className={cn({
          'stroke-light-neutral-2 dark:stroke-dark-neutral-2 group-hover/sad:stroke-light-neutral-1 group-hover/sad:dark:stroke-dark-neutral-1 group-[.selected]/sad:stroke-light-neutral-1 group-[.selected]/sad:dark:stroke-dark-neutral-1':
            color === 'neutral-2',
        })}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export type Icon = 'sun' | 'moon'

export const IconMap: FC<{
  icon: Icon
  className?: string
  color?: 'neutral-2'
}> = ({ icon, color, className }) => {
  switch (icon) {
    case 'sun':
      return <Sun color={color} className={className} />
    case 'moon':
      return <Moon color={color} className={className} />
    default:
      console.warn(`Icon ${icon} not found`)
      return null
  }
}
