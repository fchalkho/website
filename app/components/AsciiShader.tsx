"use client"

import { useRef, useEffect, useCallback } from "react"
import { ASCII_BG_LIGHT, ASCII_BG_DARK } from "../lib/ascii"

// ── SVG Shape ────────────────────────────────────────────
const SVG_PATH = `M148.927 82.68C148.232 85.0907 147.206 87.405 145.878 89.5564C143.336 93.6686 139.72 97.1293 135.398 99.585C135.139 99.7307 135.014 100.033 135.094 100.318C136.411 105.116 136.521 110.121 135.406 114.825C134.824 117.285 133.913 119.646 132.7 121.841C131.451 124.099 129.881 126.182 128.031 128.031C122.784 133.279 115.754 136.17 108.24 136.17C105.574 136.17 102.915 135.806 100.329 135.088C100.042 135.009 99.74 135.133 99.5943 135.392C97.1346 139.719 93.6742 143.336 89.5625 145.875C87.4113 147.204 85.0972 148.23 82.6846 148.924C80.2034 149.638 77.6194 150 75.0032 150C72.387 150 69.803 149.638 67.3218 148.924C64.9092 148.23 62.5952 147.204 60.444 145.875C56.3301 143.334 52.8697 139.716 50.4121 135.392C50.2643 135.133 49.9621 135.009 49.6772 135.088C47.091 135.806 44.4298 136.17 41.7665 136.17C34.2501 136.17 27.2223 133.279 21.9749 128.031C20.1258 126.182 18.5553 124.099 17.3061 121.841C16.0912 119.646 15.1806 117.285 14.6 114.825C13.4879 110.121 13.5972 105.118 14.9128 100.318C14.9921 100.031 14.8657 99.7307 14.6085 99.5829C10.2868 97.1271 6.67005 93.6664 4.12887 89.5543C2.80043 87.4029 1.77411 85.0907 1.07989 82.6779C0.362107 80.1986 0 77.6143 0 75C0 72.3857 0.362107 69.8014 1.07561 67.32C1.76982 64.9093 2.79615 62.595 4.12459 60.4436C6.66576 56.3314 10.2825 52.8707 14.6043 50.415C14.8635 50.2693 14.9878 49.9671 14.9085 49.6821C13.5908 44.8843 13.4815 39.8786 14.5957 35.175C15.1785 32.715 16.0891 30.3536 17.3018 28.1593C18.551 25.9007 20.1216 23.8179 21.9707 21.9686C27.218 16.7207 34.248 13.83 41.7623 13.83C44.4277 13.83 47.0867 14.1943 49.6729 14.9121C49.96 14.9914 50.2621 14.8671 50.4078 14.6079C52.8676 10.2814 56.3279 6.66429 60.4397 4.125C62.5909 2.79643 64.9049 1.77 67.3176 1.07571C69.803 0.362143 72.387 0 75.0011 0C77.6172 0 80.2013 0.362143 82.6824 1.07571C85.0951 1.77 87.4091 2.79643 89.5603 4.125C93.6742 6.66643 97.1346 10.2836 99.5922 14.6079C99.74 14.8671 100.042 14.9914 100.327 14.9121C102.913 14.1943 105.574 13.83 108.238 13.83C115.754 13.83 122.782 16.7207 128.029 21.9686C129.878 23.8179 131.449 25.9007 132.698 28.1593C133.913 30.3536 134.824 32.715 135.404 35.175C136.516 39.8786 136.407 44.8821 135.091 49.6821C135.012 49.9693 135.136 50.2693 135.396 50.415C139.717 52.8707 143.334 56.3314 145.875 60.4436C147.204 62.595 148.23 64.9071 148.924 67.32C149.638 69.8014 150 72.3857 150 75C150 77.6143 149.638 80.1986 148.924 82.68H148.927ZM95.7333 126.174C95.789 126.201 95.8468 126.214 95.9068 126.214C96.0675 126.214 96.2111 126.114 96.2625 125.964C96.9374 124.044 97.381 122.038 97.5845 120.006C97.8952 116.906 97.6252 113.848 96.7853 110.919C95.4376 106.23 92.89 102.849 90.9895 100.834C90.5245 100.341 90.036 99.8636 89.4939 99.375C88.6561 98.625 87.6341 98.2286 86.5349 98.2286C85.4357 98.2286 84.3451 98.6357 83.5031 99.3771C82.6203 100.153 82.0846 101.239 81.9968 102.435C81.9411 103.185 81.9218 103.982 81.9411 104.803C82.0696 109.821 83.7473 113.777 85.1315 116.214C86.5821 118.768 88.4847 121.031 90.7838 122.942C92.3051 124.206 93.9699 125.293 95.7311 126.171L95.7333 126.174ZM52.4176 120.006C52.6212 122.04 53.0668 124.044 53.7396 125.964C53.791 126.114 53.9346 126.214 54.0953 126.214C54.1553 126.214 54.2132 126.199 54.2689 126.174C56.0301 125.295 57.6949 124.209 59.2162 122.944C61.5153 121.033 63.4179 118.768 64.8685 116.216C66.2527 113.779 67.9304 109.824 68.0589 104.805C68.0782 103.984 68.0589 103.189 68.0032 102.437C67.9154 101.241 67.3797 100.157 66.4969 99.3793C65.6549 98.64 64.5771 98.2307 63.4651 98.2307C62.3531 98.2307 61.3439 98.6271 60.5061 99.3771C59.964 99.8657 59.4755 100.341 59.0105 100.836C57.11 102.849 54.5624 106.232 53.2147 110.921C52.3748 113.85 52.1048 116.906 52.4155 120.009L52.4176 120.006ZM54.271 23.8264C54.2153 23.7986 54.1574 23.7857 54.0974 23.7857C53.9367 23.7857 53.7932 23.8864 53.7418 24.0364C53.0668 25.9564 52.6233 27.9621 52.4198 29.9936C52.1091 33.0943 52.379 36.1521 53.219 39.0814C54.5667 43.77 57.1143 47.1514 59.0148 49.1657C59.4798 49.6586 59.9683 50.1364 60.5104 50.625C61.3482 51.375 62.3702 51.7714 63.4694 51.7714C64.5835 51.7714 65.6591 51.3643 66.5012 50.6229C67.384 49.8471 67.9196 48.7607 68.0075 47.565C68.0632 46.815 68.0825 46.0179 68.0632 45.1971C67.9346 40.1786 66.2569 36.2229 64.8728 33.7864C63.4222 31.2321 61.5196 28.9693 59.2205 27.0579C57.6992 25.7936 56.0344 24.7071 54.2731 23.8286L54.271 23.8264ZM97.5845 29.9936C97.381 27.96 96.9353 25.9564 96.2625 24.0364C96.2111 23.8864 96.0675 23.7857 95.9068 23.7857C95.8468 23.7857 95.789 23.8007 95.7333 23.8264C93.972 24.705 92.3072 25.7914 90.7859 27.0557C88.4869 28.9671 86.5842 31.2321 85.1336 33.7843C83.7495 36.2207 82.0718 40.1764 81.9432 45.195C81.924 46.0157 81.9432 46.8107 81.9989 47.5629C82.0868 48.7586 82.6225 49.8429 83.5052 50.6207C84.3473 51.36 85.425 51.7693 86.5371 51.7693C87.6491 51.7693 88.6583 51.3729 89.496 50.6229C90.0381 50.1343 90.5267 49.6586 90.9916 49.1636C92.8921 47.1514 95.4397 43.7679 96.7875 39.0793C97.6274 36.15 97.8974 33.0943 97.5867 29.9914L97.5845 29.9936ZM137.106 58.905C136.668 58.4957 136.176 58.0714 135.644 57.6471C135.141 57.2443 134.577 57.0257 134.014 57.0086C133.988 57.0086 133.962 57.0086 133.937 57.0086C132.992 57.0086 132.124 57.4907 131.62 58.2986C130.292 60.4071 128.713 62.3807 126.926 64.1593C120.695 70.395 112.274 73.9714 103.82 73.9714C100.269 73.9714 96.8453 73.3564 93.6421 72.1436C92.0437 71.5457 90.4881 70.785 89.0118 69.8786C88.6861 69.6793 88.489 69.3171 88.504 68.9357C88.5597 67.5 89.7875 64.9993 90.186 63.8871C90.1967 63.8593 90.2074 63.8314 90.2203 63.8036C95.1462 52.9564 106.588 45.9514 119.384 45.9514C121.927 45.9514 124.436 46.2279 126.844 46.7743C127.057 46.8236 127.26 46.8471 127.466 46.8471C128.835 46.8471 129.983 45.8443 130.14 44.5157C130.219 43.8429 130.271 43.155 130.29 42.4714C130.483 36.2507 128.207 30.4457 123.883 26.1214C119.742 21.9857 114.186 19.7079 108.24 19.7079C107.34 19.7079 106.432 19.7571 105.54 19.8579C104.672 19.9586 103.925 20.4621 103.492 21.2336C103.17 21.8057 103.087 22.5407 103.258 23.3036C103.785 25.6629 104.053 28.125 104.053 30.6171C104.053 43.4379 97.0253 54.8979 86.1514 59.8093C84.5915 60.5057 82.9631 61.0714 81.2983 61.4657C80.8676 61.5664 80.4134 61.4036 80.1627 61.0393C79.1878 59.6207 78.4936 57.9321 77.8636 56.3679C73.6405 45.2079 76.7688 32.1429 85.8386 23.0807C87.6277 21.2914 89.601 19.71 91.7051 18.3814C92.3715 17.9657 92.8279 17.2864 92.9607 16.5171C93.0871 15.7693 92.9007 15.0386 92.4358 14.4557C92.0415 13.95 91.5916 13.4271 91.0987 12.9C86.8349 8.36786 81.1162 5.87143 74.9989 5.87143C68.8817 5.87143 63.1651 8.36786 58.8991 12.9C58.4042 13.4271 57.9563 13.95 57.5621 14.4557C57.0993 15.0386 56.9129 15.7693 57.0372 16.5171C57.17 17.2864 57.6264 17.9657 58.2927 18.3814C60.3968 19.71 62.3702 21.2914 64.1593 23.0807C73.227 32.1429 76.3574 45.2079 72.1342 56.3679C71.5064 57.93 70.8101 59.6207 69.8352 61.0393C69.5845 61.4036 69.1302 61.5664 68.6996 61.4657C67.0347 61.0736 65.4063 60.5057 63.8465 59.8093C52.9704 54.8957 45.9447 43.4379 45.9447 30.6171C45.9447 28.1229 46.2125 25.6629 46.7396 23.3036C46.911 22.5407 46.8275 21.8057 46.5061 21.2336C46.0732 20.46 45.3255 19.9586 44.4577 19.8579C43.5664 19.7593 42.66 19.7079 41.758 19.7079C35.8121 19.7079 30.2563 21.9857 26.1145 26.1214C21.7907 30.4457 19.5152 36.2529 19.708 42.4714C19.7273 43.155 19.7766 43.845 19.858 44.5157C20.0123 45.8443 21.1629 46.8471 22.532 46.8471C22.7399 46.8471 22.9413 46.8236 23.1534 46.7743C25.5617 46.2279 28.0708 45.9514 30.6141 45.9514C43.4121 45.9514 54.8538 52.9586 59.7776 63.8057C59.7904 63.8336 59.8012 63.8593 59.8097 63.8871C60.219 65.0164 61.421 67.4721 61.4917 68.9207C61.511 69.3086 61.3139 69.6771 60.9839 69.8786C59.5076 70.785 57.9521 71.5457 56.3537 72.1436C53.1504 73.3564 49.7265 73.9714 46.1761 73.9714C37.7234 73.9714 29.3006 70.395 23.0698 64.1593C21.285 62.3807 19.7059 60.4071 18.3753 58.2986C17.8696 57.4907 17.004 57.0086 16.0591 57.0086C16.0334 57.0086 16.0077 57.0086 15.982 57.0086C15.4185 57.0236 14.8549 57.2443 14.3514 57.6471C13.82 58.0714 13.3272 58.4957 12.8901 58.905C8.35631 63.1757 5.86013 68.8929 5.86013 75C5.86013 81.1071 8.35631 86.8243 12.8901 91.095C13.3272 91.5043 13.82 91.9286 14.3514 92.3529C14.8549 92.7557 15.4185 92.9743 15.982 92.9914C16.0077 92.9914 16.0334 92.9914 16.0591 92.9914C17.004 92.9914 17.8718 92.5093 18.3753 91.7014C19.7037 89.5929 21.2829 87.6193 23.0698 85.8407C29.3006 79.605 37.7212 76.0286 46.1761 76.0286C49.7265 76.0286 53.1504 76.6436 56.3537 77.8564C57.9521 78.4543 59.5076 79.215 60.9839 80.1214C61.3096 80.3207 61.5067 80.6829 61.4917 81.0643C61.436 82.5 60.2083 85.0007 59.8097 86.1129C59.799 86.1407 59.7883 86.1686 59.7755 86.1964C54.8495 97.0436 43.4078 104.049 30.6119 104.049C28.0686 104.049 25.5596 103.772 23.1513 103.226C22.9391 103.176 22.7356 103.153 22.5299 103.153C21.1607 103.153 20.0123 104.156 19.8559 105.484C19.7766 106.157 19.7252 106.845 19.7059 107.529C19.513 113.749 21.7885 119.554 26.1124 123.879C30.2541 128.014 35.81 130.292 41.7558 130.292C42.6557 130.292 43.5642 130.243 44.4556 130.142C45.3233 130.041 46.0711 129.538 46.5039 128.766C46.8253 128.194 46.9089 127.459 46.7375 126.696C46.2104 124.337 45.9425 121.875 45.9425 119.383C45.9425 106.562 52.9704 95.1021 63.8443 90.1907C65.4042 89.4943 67.0326 88.9286 68.6974 88.5343C69.1281 88.4336 69.5823 88.5964 69.833 88.9607C70.8079 90.3793 71.5021 92.0679 72.1321 93.6321C76.3552 104.792 73.227 117.857 64.1572 126.919C62.368 128.709 60.3947 130.29 58.2906 131.619C57.6242 132.034 57.1679 132.714 57.035 133.483C56.9086 134.229 57.095 134.961 57.56 135.544C57.9542 136.05 58.4042 136.573 58.897 137.1C63.1608 141.632 68.8795 144.129 74.9968 144.129C81.114 144.129 86.8306 141.632 91.0966 137.1C91.5916 136.573 92.0394 136.05 92.4336 135.544C92.8964 134.961 93.0828 134.231 92.9586 133.483C92.8257 132.714 92.3693 132.034 91.703 131.619C89.5989 130.29 87.6255 128.709 85.8364 126.919C76.7687 117.857 73.6384 104.792 77.8615 93.6321C78.5043 92.0614 79.1685 90.3686 80.1756 88.9564C80.407 88.6329 80.8012 88.4614 81.1955 88.5193C82.4318 88.7014 84.0173 89.31 86.1492 90.1907C97.0253 95.1043 104.051 106.562 104.051 119.383C104.051 121.877 103.783 124.337 103.256 126.696C103.085 127.459 103.168 128.194 103.49 128.766C103.922 129.54 104.67 130.041 105.538 130.142C106.429 130.241 107.336 130.292 108.238 130.292C114.184 130.292 119.739 128.014 123.881 123.879C128.205 119.554 130.481 113.747 130.288 107.529C130.268 106.845 130.219 106.155 130.138 105.484C129.983 104.156 128.833 103.153 127.464 103.153C127.256 103.153 127.054 103.176 126.842 103.226C124.434 103.772 121.925 104.049 119.382 104.049C106.586 104.049 95.1441 97.0414 90.2181 86.1943C90.2053 86.1664 90.1945 86.1407 90.1838 86.1107C89.7874 85.0093 88.5576 82.4979 88.4997 81.0621C88.4847 80.6807 88.6818 80.3186 89.0075 80.1193C90.4838 79.2129 92.0394 78.4521 93.6378 77.8543C96.841 76.6414 100.265 76.0264 103.815 76.0264C112.268 76.0264 120.691 79.6029 126.922 85.8386C128.706 87.6171 130.286 89.5907 131.616 91.6993C132.122 92.5071 132.987 92.9893 133.932 92.9893C133.958 92.9893 133.984 92.9893 134.009 92.9893C134.573 92.9743 135.136 92.7536 135.64 92.3507C136.171 91.9264 136.664 91.5021 137.101 91.0929C141.635 86.8221 144.131 81.105 144.131 74.9979C144.131 68.8907 141.635 63.1736 137.101 58.9029L137.106 58.905ZM126.075 53.6893C126.032 53.5886 125.947 53.5093 125.842 53.4729C123.256 52.6071 120.459 52.1507 117.751 52.1507C115.563 52.1507 113.395 52.4421 111.304 53.0186C108.602 53.7621 104.619 55.3714 100.981 58.83C100.387 59.3957 99.8386 59.9743 99.3458 60.5443C98.763 61.2193 98.3944 62.0293 98.2809 62.8864C98.1738 63.6921 98.2873 64.5193 98.6109 65.28C98.9323 66.0343 99.4422 66.6857 100.087 67.1614C100.775 67.6671 101.604 67.9607 102.485 68.01C102.96 68.0357 103.41 68.0464 103.858 68.0464C104.098 68.0464 104.338 68.0421 104.574 68.0357C107.34 67.9564 111.535 67.3671 115.801 65.0036C118.467 63.5271 120.817 61.5557 122.791 59.1429C124.085 57.5614 125.186 55.83 126.067 53.9957C126.114 53.8971 126.116 53.7879 126.075 53.6871V53.6893ZM23.9376 53.9979C24.8182 55.8321 25.9217 57.5657 27.2137 59.145C29.1871 61.5579 31.5397 63.5293 34.203 65.0057C38.469 67.3671 42.6643 67.9586 45.4305 68.0379C45.6661 68.0443 45.9061 68.0486 46.1461 68.0486C46.5939 68.0486 47.0439 68.0357 47.5195 68.0121C48.4002 67.9629 49.2294 67.6693 49.9172 67.1636C50.5621 66.6879 51.0742 66.0386 51.3934 65.2821C51.717 64.5214 51.8305 63.6943 51.7234 62.8886C51.6077 62.0314 51.2392 61.2214 50.6585 60.5464C50.1678 59.9764 49.6172 59.4 49.0237 58.8321C45.3855 55.3736 41.4023 53.7621 38.7004 53.0207C36.6092 52.4443 34.4408 52.1529 32.2532 52.1529C29.5449 52.1529 26.7488 52.6093 24.1626 53.475C24.0576 53.5093 23.9719 53.5886 23.929 53.6914C23.8862 53.7921 23.8905 53.9014 23.9376 54V53.9979ZM23.929 96.3107C23.9719 96.4114 24.0576 96.4907 24.1626 96.5271C26.7488 97.3929 29.5449 97.8493 32.2532 97.8493C34.4408 97.8493 36.6092 97.5579 38.7004 96.9814C41.4023 96.2379 45.3855 94.6286 49.0237 91.17C49.6172 90.6043 50.1657 90.0257 50.6585 89.4557C51.2413 88.7807 51.6098 87.9707 51.7234 87.1136C51.8305 86.3079 51.717 85.4807 51.3934 84.72C51.072 83.9657 50.5621 83.3143 49.9172 82.8386C49.2294 82.3329 48.4002 82.0393 47.5195 81.99C47.0439 81.9643 46.5939 81.9536 46.1461 81.9536C45.9061 81.9536 45.6661 81.9579 45.4305 81.9643C42.6643 82.0436 38.469 82.6329 34.203 84.9964C31.5376 86.4729 29.1871 88.4443 27.2137 90.8571C25.9196 92.4386 24.8182 94.17 23.9376 96.0043C23.8905 96.1029 23.8883 96.2121 23.929 96.3129V96.3107ZM126.067 96.0021C125.186 94.1679 124.083 92.4343 122.791 90.855C120.817 88.4421 118.465 86.4707 115.801 84.9943C111.535 82.6329 107.34 82.0414 104.574 81.9621C104.338 81.9557 104.098 81.9514 103.858 81.9514C103.41 81.9514 102.96 81.9643 102.485 81.9879C101.604 82.0371 100.775 82.3307 100.087 82.8364C99.4422 83.3121 98.9301 83.9614 98.6109 84.7179C98.2873 85.4786 98.1738 86.3057 98.2809 87.1114C98.3966 87.9686 98.7651 88.7786 99.3458 89.4536C99.8364 90.0236 100.387 90.6 100.981 91.1679C104.619 94.6264 108.602 96.2379 111.304 96.9793C113.395 97.5557 115.563 97.8471 117.751 97.8471C120.459 97.8471 123.256 97.3907 125.842 96.525C125.947 96.4907 126.032 96.4114 126.075 96.3086C126.118 96.2079 126.114 96.0986 126.067 96V96.0021Z`
const SVG_WIDTH = 150
const SVG_HEIGHT = 150

// ── Config ──────────────────────────────────────────────
interface AsciiConfig {
  scale: number
  cellSize: number
  speed: number
  waveFreq: number
  waveIntensity: number
  mouseRadius: number
  flickerRate: number
  noiseAmount: number
  scanlines: number
  charSet: string
}

export const DEFAULT_CONFIG: AsciiConfig = {
  "scale": 2.4,
  "cellSize": 6,
  "speed": 1,
  "waveFreq": 5,
  "waveIntensity": 0.4,
  "mouseRadius": 280,
  "flickerRate": 16,
  "noiseAmount": 0.02,
  "scanlines": 0.44,
  "charSet": "blocks"
}

// ── SVG Utilities ──────────────────────────────

const SVG_NS = "http://www.w3.org/2000/svg"

type FillPoint = { x: number; y: number; edgeDist: number }

// Sample points inside the SVG path via isPointInFill, tagging each with its
// distance (in grid steps, capped at 10) to the nearest empty cell.
function fillSVGPath(pathD: string, spacingScale: number, vbW = 32, vbH = 32): FillPoint[] {
  // Get the path's bounding box once via a throwaway SVG node...
  const svg = document.createElementNS(SVG_NS, "svg")
  const path = document.createElementNS(SVG_NS, "path")
  path.setAttribute("d", pathD)
  svg.setAttribute("viewBox", `0 0 ${vbW} ${vbH}`)
  svg.appendChild(path)
  document.body.appendChild(svg)
  const bbox = path.getBBox()
  document.body.removeChild(svg)

  // ...then run the (dense) fill test with Path2D on an offscreen canvas instead
  // of SVGPathElement.isPointInFill, which forces layout on every call. Same fill
  // rule and same sampling grid, but ~an order of magnitude faster — this is the
  // init cost that used to block the main thread for ~400ms on route entry.
  // Rasterize the filled path once, then sample the alpha buffer per point (O(1)
  // lookups) instead of running a vector fill test per point. Supersample so the
  // pixel grid is finer than the sample step, preserving the sampled shape.
  const SS = 4
  const off = document.createElement("canvas")
  off.width = Math.max(1, Math.ceil(vbW * SS))
  off.height = Math.max(1, Math.ceil(vbH * SS))
  const octx = off.getContext("2d")!
  octx.scale(SS, SS)
  octx.fillStyle = "#fff"
  octx.fill(new Path2D(pathD))
  const bw = off.width
  const bh = off.height
  const alpha = octx.getImageData(0, 0, bw, bh).data
  const isInside = (x: number, y: number): boolean => {
    const px = Math.round(x * SS)
    const py = Math.round(y * SS)
    if (px < 0 || py < 0 || px >= bw || py >= bh) return false
    return alpha[(py * bw + px) * 4 + 3] > 127
  }

  const step = (Math.min(vbW, vbH) / 300) * spacingScale
  const inside: { x: number; y: number }[] = []
  for (let x = bbox.x; x < bbox.x + bbox.width; x += step) {
    for (let y = bbox.y; y < bbox.y + bbox.height; y += step) {
      if (isInside(x, y)) inside.push({ x, y })
    }
  }

  const set = new Set(inside.map((p) => `${p.x},${p.y}`))
  const neighbors = [[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [1, -1], [-1, 1], [1, 1]]
  const result: FillPoint[] = []
  for (const p of inside) {
    let minStep = Infinity
    for (let sStep = 1; sStep <= 10; sStep++) {
      let found = false
      for (const [dx, dy] of neighbors) {
        const nx = p.x + dx * step * sStep
        const ny = p.y + dy * step * sStep
        if (!set.has(`${nx},${ny}`)) {
          minStep = Math.min(minStep, sStep)
          found = true
          break
        }
      }
      if (found) break
    }
    result.push({ x: p.x, y: p.y, edgeDist: Math.min(minStep, 10) })
  }

  return result
}

function getLogoTransform(w: number, h: number, svgScale = 1, svgW = 32, svgH = 32) {
  const isMobile = w < 768
  const frac = isMobile ? 0.42 : 0.3
  const fit = Math.min((h * frac) / svgH, (w * frac) / svgW)
  const scale = Math.min((isMobile ? 280 : 200) / Math.max(svgW, svgH), fit) * svgScale
  return { scale, offsetX: w / 2 - (svgW * scale) / 2, offsetY: h / 2 - (svgH * scale) / 2 }
}

// ── ASCII Shader ──────────────────────────────────────
const CHAR_RAMPS = {
  blocks: " \u2591\u2592\u2593\u2588",
  code: " ._-~:;=!*#$@",
  minimal: " .-+X#",
}
type RampKey = keyof typeof CHAR_RAMPS

interface GridCell {
  col: number
  row: number
  x: number
  y: number
  density: number
  edgeFactor: number
  tornUntil: number
}

interface FlyingChar {
  x: number; y: number
  vx: number; vy: number
  char: string
  r: number; g: number; b: number
  life: number
  maxLife: number
  size: number
  rotation: number
  rotSpeed: number
  cellIdx: number
  mass: number
  dragCoeff: number
  tumblePhase: number
  tumbleFreq: number
  scaleY: number
  flipSpeed: number
}

const MAX_FLYING = 250

export default function AsciiShader({ config, svgScale = 1, theme = "dark", svgPath = SVG_PATH, svgWidth = SVG_WIDTH, svgHeight = SVG_HEIGHT, colorFn }: { config: AsciiConfig; svgScale?: number; theme?: "light" | "dark"; svgPath?: string; svgWidth?: number; svgHeight?: number; colorFn?: ((x: number, y: number, w: number, h: number) => string) | null }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const configRef = useRef(config)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const prevMouseRef = useRef({ x: -9999, y: -9999, time: 0 })
  const velRef = useRef({ vx: 0, vy: 0, speed: 0 })
  const gridRef = useRef<GridCell[]>([])
  const gridLookupRef = useRef<Map<number, number>>(new Map())
  const flyingRef = useRef<FlyingChar[]>([])
  const lastFrameRef = useRef(0)
  const dimsRef = useRef({ w: 0, h: 0 })
  const themeRef = useRef(theme)
  const colorFnRef = useRef(colorFn)
  const startTimeRef = useRef<number | null>(null)

  configRef.current = config
  themeRef.current = theme
  colorFnRef.current = colorFn

  const packKey = (col: number, row: number) => col * 100000 + row

  const init = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    startTimeRef.current = null

    const dpr = window.devicePixelRatio || 1
    const w = window.innerWidth
    const h = window.innerHeight
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = `${w}px`
    canvas.style.height = `${h}px`
    dimsRef.current = { w, h }

    // Paint the surface color immediately (resizing the canvas above clears it to
    // the opaque black default with alpha:false). Otherwise a black frame flashes
    // before the animation loop's first fill — visible when entering the route.
    const ictx = canvas.getContext("2d", { alpha: false })
    if (ictx) {
      ictx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ictx.fillStyle = themeRef.current === "light" ? ASCII_BG_LIGHT : ASCII_BG_DARK
      ictx.fillRect(0, 0, w, h)
    }

    const points = fillSVGPath(svgPath, 1.2, svgWidth, svgHeight)
    let { scale, offsetX, offsetY } = getLogoTransform(w, h, svgScale, svgWidth, svgHeight)

    // Clamp so the logo always fits within the viewport with margin — keeps
    // small screens tidy where the large svgScale would otherwise overflow.
    const marginFrac = w < 768 ? 0.86 : 0.9
    const maxFit = Math.min((w * marginFrac) / svgWidth, (h * marginFrac) / svgHeight)
    if (scale > maxFit) {
      scale = maxFit
      offsetX = w / 2 - (svgWidth * scale) / 2
      offsetY = h / 2 - (svgHeight * scale) / 2
    }

    const charSize = configRef.current.cellSize
    const rowH = charSize * 1.6
    const halfChar = charSize / 2

    const tempMap = new Map<number, { count: number; edgeSum: number }>()
    for (const p of points) {
      const tx = p.x * scale + offsetX
      const ty = p.y * scale + offsetY
      const col = Math.floor(tx / charSize)
      const row = Math.floor(ty / rowH)
      const key = packKey(col, row)
      const existing = tempMap.get(key)
      if (existing) {
        existing.count++
        existing.edgeSum += p.edgeDist
      } else {
        tempMap.set(key, { count: 1, edgeSum: p.edgeDist })
      }
    }

    let maxDensity = 0
    for (const v of tempMap.values()) {
      if (v.count > maxDensity) maxDensity = v.count
    }

    const cells: GridCell[] = []
    const lookup = new Map<number, number>()
    for (const [key, v] of tempMap) {
      const row = key % 100000
      const col = (key - row) / 100000
      const idx = cells.length
      lookup.set(key, idx)
      cells.push({
        col, row,
        x: col * charSize + halfChar,
        y: row * rowH + charSize * 0.8,
        density: v.count / maxDensity,
        edgeFactor: (v.edgeSum / v.count) / 10,
        tornUntil: 0,
      })
    }

    gridRef.current = cells
    gridLookupRef.current = lookup
    flyingRef.current = []
  }, [svgScale, svgPath, svgWidth, svgHeight])

  useEffect(() => {
    init()
    window.addEventListener("resize", init)
    return () => window.removeEventListener("resize", init)
  }, [init])

  useEffect(() => { init() }, [config.cellSize, init])

  useEffect(() => {
    const updatePointer = (x: number, y: number) => {
      const now = performance.now()
      const prev = prevMouseRef.current
      const dt = (now - prev.time) / 1000
      if (dt > 0.001 && dt < 0.15) {
        const rx = (x - prev.x) / dt
        const ry = (y - prev.y) / dt
        const v = velRef.current
        v.vx = v.vx * 0.55 + rx * 0.45
        v.vy = v.vy * 0.55 + ry * 0.45
        v.speed = Math.sqrt(v.vx * v.vx + v.vy * v.vy)
      }
      prevMouseRef.current = { x, y, time: now }
      mouseRef.current = { x, y }
    }
    const onMove = (e: MouseEvent) => {
      updatePointer(e.clientX, e.clientY)
    }
    const onTouch = (e: TouchEvent) => {
      if ((e.target as Element)?.closest?.("[data-controls-panel]")) return
      const touch = e.touches[0]
      if (touch) updatePointer(touch.clientX, touch.clientY)
    }
    window.addEventListener("mousemove", onMove)
    window.addEventListener("touchstart", onTouch, { passive: true })
    window.addEventListener("touchmove", onTouch, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("touchstart", onTouch)
      window.removeEventListener("touchmove", onTouch)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    // Compute column/row ranges for intro normalization
    let minCol = Infinity, maxCol = -Infinity, minRow = Infinity, maxRow = -Infinity
    for (const c of gridRef.current) {
      if (c.col < minCol) minCol = c.col
      if (c.col > maxCol) maxCol = c.col
      if (c.row < minRow) minRow = c.row
      if (c.row > maxRow) maxRow = c.row
    }
    const colRange = Math.max(1, maxCol - minCol)
    const rowRange = Math.max(1, maxRow - minRow)

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) startTimeRef.current = timestamp
      const introElapsed = (timestamp - startTimeRef.current) * 0.001
      const introDuration = 2.0

      const dt = Math.min((timestamp - (lastFrameRef.current || timestamp)) / 1000, 0.05)
      lastFrameRef.current = timestamp

      const cfg = configRef.current
      const dpr = window.devicePixelRatio || 1
      const { w: width, h: height } = dimsRef.current
      const cells = gridRef.current
      const mouse = mouseRef.current
      const vel = velRef.current
      const flying = flyingRef.current
      const time = timestamp * 0.001 * cfg.speed
      const charSize = cfg.cellSize
      const ramp = CHAR_RAMPS[(cfg.charSet as RampKey)] || CHAR_RAMPS.minimal
      const rampLen = ramp.length
      const mouseRad = cfg.mouseRadius
      const mouseRadSq = mouseRad * mouseRad

      ctx.save()
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const isLight = themeRef.current === "light"
      ctx.fillStyle = isLight ? ASCII_BG_LIGHT : ASCII_BG_DARK
      ctx.fillRect(0, 0, width, height)

      if (cells.length === 0) {
        ctx.restore()
        rafRef.current = requestAnimationFrame(animate)
        return
      }

      const speedThresh = 1600
      if (vel.speed > speedThresh && flying.length < MAX_FLYING) {
        const spawnBudget = Math.min(Math.floor((vel.speed - speedThresh) / 400), 6, MAX_FLYING - flying.length)
        const dirX = vel.vx / vel.speed
        const dirY = vel.vy / vel.speed
        const now = timestamp

        let spawned = 0
        const startIdx = Math.floor(Math.random() * cells.length)
        for (let j = 0; j < cells.length && spawned < spawnBudget; j++) {
          const i = (startIdx + j) % cells.length
          const c = cells[i]
          if (c.tornUntil > now) continue
          const dx = c.x - mouse.x
          const dy = c.y - mouse.y
          const dSq = dx * dx + dy * dy
          if (dSq > mouseRadSq) continue

          const distNorm = Math.sqrt(dSq) / mouseRad
          if (Math.random() > (1 - distNorm) * 0.7) continue

          const wP = Math.sin(
            (c.x / width) * cfg.waveFreq * 6.28 +
            (c.y / height) * cfg.waveFreq * 3.14 - time * 2
          ) * 0.5 + 0.5
          let br = c.density * 0.5 + c.edgeFactor * 0.3 + wP * cfg.waveIntensity * 0.3
          if (br > 1) br = 1
          const ci = Math.min(Math.floor(br * (rampLen - 1)), rampLen - 1)
          const ch = ramp[ci]
          if (ch === " ") continue

          const st = cfg.charSet as RampKey
          let cr: number, cg: number, cb: number
          if (st === "blocks") {
            // grayscale ramp: #35373B (low) -> #A3A6A8 (high)
            const gt = Math.min(1, br * 0.85 + wP * 0.15)
            cr = (53 + 110 * gt) | 0
            cg = (55 + 111 * gt) | 0
            cb = (59 + 109 * gt) | 0
          } else if (st === "code") {
            cr = (140 + 115 * br) | 0
            cg = (40 * br * wP) | 0
            cb = (60 + 68 * br) | 0
          } else {
            const base = (120 + 135 * br) | 0
            cr = (base * 0.85 + 30 * wP) | 0
            cg = (base * 0.9 + 20 * wP) | 0
            cb = base
          }

          const mass = 0.5 + Math.random() * 1.5
          const baseAngle = Math.atan2(dirY, dirX)
          const spreadAngle = (1.2 / mass) * (Math.random() - 0.5)
          const angle = baseAngle + spreadAngle
          const speedMul = (0.06 + Math.random() * 0.16) / Math.sqrt(mass)
          const mag = vel.speed * speedMul
          const perpSign = Math.random() > 0.5 ? 1 : -1
          const perpAngle = baseAngle + perpSign * 1.5708
          const perpMag = vel.speed * (0.01 + Math.random() * 0.04) / mass

          const lifespan = 1.0 + Math.random() * 1.2 + mass * 0.3

          c.tornUntil = now + lifespan * 1000

          flying.push({
            x: c.x, y: c.y,
            vx: Math.cos(angle) * mag + Math.cos(perpAngle) * perpMag,
            vy: Math.sin(angle) * mag + Math.sin(perpAngle) * perpMag - 30 * (1 / mass),
            char: ch,
            r: cr, g: cg, b: cb,
            life: lifespan,
            maxLife: lifespan,
            size: charSize,
            rotation: (Math.random() - 0.5) * 0.3,
            rotSpeed: (Math.random() - 0.5) * (8 / mass),
            cellIdx: i,
            mass,
            dragCoeff: 0.001 + Math.random() * 0.002,
            tumblePhase: Math.random() * 6.28,
            tumbleFreq: 2 + Math.random() * 4,
            scaleY: 1,
            flipSpeed: (Math.random() - 0.5) * (6 / mass),
          })
          spawned++
        }
      }

      const baseGravity = 280

      ctx.font = `${charSize}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      let writeIdx = 0
      for (let i = 0; i < flying.length; i++) {
        const f = flying[i]
        const elapsed = f.maxLife - f.life

        f.vy += baseGravity * f.mass * 0.7 * dt

        const speed = Math.sqrt(f.vx * f.vx + f.vy * f.vy)
        if (speed > 1) {
          const dragMag = f.dragCoeff * speed * speed / f.mass
          f.vx -= (f.vx / speed) * dragMag * dt
          f.vy -= (f.vy / speed) * dragMag * dt
        }

        const turbX = Math.sin(elapsed * f.tumbleFreq + f.tumblePhase) * 15 / f.mass
        const turbY = Math.cos(elapsed * f.tumbleFreq * 0.7 + f.tumblePhase * 1.3) * 8 / f.mass
        f.vx += turbX * dt
        f.vy += turbY * dt

        f.x += f.vx * dt
        f.y += f.vy * dt

        f.rotation += f.rotSpeed * dt
        f.rotSpeed *= (1 - 1.2 * dt)

        f.scaleY = Math.cos(elapsed * f.flipSpeed + f.tumblePhase)

        f.life -= dt

        if (f.life <= 0 || f.x < -200 || f.x > width + 200 || f.y > height + 200) {
          continue
        }

        const cosR = Math.cos(f.rotation)
        const sinR = Math.sin(f.rotation)
        const sy = f.scaleY
        ctx.setTransform(
          dpr * cosR, dpr * sinR * sy,
          -dpr * sinR, dpr * cosR * sy,
          dpr * f.x, dpr * f.y
        )

  const lifeRatio = f.life / f.maxLife
  const alpha = lifeRatio < 0.35 ? (lifeRatio / 0.35) * (lifeRatio / 0.35) : 1
  const cfnFlying = colorFnRef.current
  if (cfnFlying) {
    ctx.fillStyle = `rgba(${cfnFlying(f.x, f.y, width, height)},${alpha})`
  } else {
    ctx.fillStyle = `rgba(${f.r},${f.g},${f.b},${alpha})`
  }
  ctx.fillText(f.char, 0, 0)

        if (writeIdx !== i) flying[writeIdx] = f
        writeIdx++
      }
      flying.length = writeIdx

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.font = `${charSize}px monospace`
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const now = timestamp
      const hackBootChars = "01{}[]<>/\\|!@#$%&*:;=+-_~"

      for (let i = 0; i < cells.length; i++) {
        const c = cells[i]
        if (c.tornUntil > now) continue

        // Intro: cascade type-in from top-left to bottom-right
        const normCol = (c.col - minCol) / colRange
        const normRow = (c.row - minRow) / rowRange
        // Diagonal sweep: top-left arrives first
        const cellDelay = (normCol * 0.5 + normRow * 0.5) * 1.2
        const cellElapsed = Math.max(0, introElapsed - cellDelay)
        const cellProgress = introDuration > 0 ? Math.min(cellElapsed / (introDuration * 0.5), 1) : 1
        if (cellProgress <= 0) continue

        // Character cycling: random chars before settling
        const isSettled = cellProgress >= 1
        const cyclePhase = isSettled ? -1 : Math.floor(cellElapsed * 20 + c.col * 7 + c.row * 13)

        const dx = c.x - mouse.x
        const dy = c.y - mouse.y
        const dSq = dx * dx + dy * dy
        const mouseInf = dSq < mouseRadSq ? Math.max(0, 1 - Math.sqrt(dSq) / mouseRad) : 0

        const wavePhase = Math.sin(
          (c.x / width) * cfg.waveFreq * 6.28 +
          (c.y / height) * cfg.waveFreq * 3.14 - time * 2
        ) * 0.5 + 0.5

        let brightness = c.density * 0.5 + c.edgeFactor * 0.3 + wavePhase * cfg.waveIntensity * 0.3
        if (mouseInf > 0) brightness = Math.min(1, brightness + mouseInf * 0.5)

        const flickerSeed = Math.sin(c.col * 127.1 + c.row * 311.7 + ((time * cfg.flickerRate) | 0) * 43.37) * 43758.5453
        const flicker = flickerSeed - Math.floor(flickerSeed)
        if (flicker < cfg.noiseAmount * 0.15) brightness = flicker * 2.5

        const charIdx = Math.min((brightness * (rampLen - 1)) | 0, rampLen - 1)
        const char = ramp[charIdx]
        if (char === " ") continue

        let r: number, g: number, b: number, alpha: number
        const st = cfg.charSet as RampKey

        if (st === "blocks") {
          if (isLight) {
            // grayscale ramp: #a7abae (low) -> #1d1d1f (high) on the light surface
            const gt = Math.min(1, brightness * 0.85 + wavePhase * 0.15)
            r = (167 - 138 * gt) | 0
            g = (171 - 142 * gt) | 0
            b = (174 - 143 * gt) | 0
          } else {
            // grayscale ramp: #35373B (low) -> #A3A6A8 (high)
            const gt = Math.min(1, brightness * 0.85 + wavePhase * 0.15)
            r = (53 + 110 * gt) | 0
            g = (55 + 111 * gt) | 0
            b = (59 + 109 * gt) | 0
          }
          alpha = 0.4 + brightness * 0.6
          if (brightness > 0.7) {
            const t = (brightness - 0.7) / 0.3
            if (isLight) {
              // darken peaks toward Labels/Primary #1d1d1f
              r = (r + (29 - r) * t) | 0
              g = (g + (29 - g) * t) | 0
              b = (b + (31 - b) * t) | 0
            } else {
              // brighten peaks toward near-white gray
              r = (r + (214 - r) * t) | 0
              g = (g + (216 - g) * t) | 0
              b = (b + (218 - b) * t) | 0
            }
          }
          if (mouseInf > 0.1) {
            if (isLight) {
              // cursor darkens toward Labels/Primary #1d1d1f
              r = (r + (29 - r) * mouseInf) | 0
              g = (g + (29 - g) * mouseInf) | 0
              b = (b + (31 - b) * mouseInf) | 0
            } else {
              // cursor lifts toward white
              r = (r + (240 - r) * mouseInf) | 0
              g = (g + (242 - g) * mouseInf) | 0
              b = (b + (244 - b) * mouseInf) | 0
            }
          }
        } else if (st === "code") {
          if (isLight) {
            r = (120 + 40 * brightness) | 0
            g = (10 + 20 * brightness * wavePhase) | 0
            b = (40 + 40 * brightness) | 0
          } else {
            r = (140 + 115 * brightness) | 0
            g = (40 * brightness * wavePhase) | 0
            b = (60 + 68 * brightness) | 0
          }
          alpha = 0.35 + brightness * 0.65
          if (brightness > 0.7) {
            const t = (brightness - 0.7) / 0.3
            if (isLight) {
              r = (r + (160 - r) * t) | 0
              g = (g + (20 - g) * t) | 0
              b = (b + (80 - b) * t) | 0
            } else {
              r = (r + (255 - r) * t) | 0
              g = (g + (60 - g) * t) | 0
              b = (b + (160 - b) * t) | 0
            }
          }
          if (mouseInf > 0.1) {
            if (isLight) {
              r = (r + (180 - r) * mouseInf * 0.6) | 0
              g = (g * (1 - mouseInf * 0.3)) | 0
              b = (b + (100 - b) * mouseInf * 0.4) | 0
            } else {
              r = (r + (255 - r) * mouseInf) | 0
              g = (g + (100 - g) * mouseInf * 0.3) | 0
              b = (b + (200 - b) * mouseInf * 0.5) | 0
            }
          }
        } else {
          if (isLight) {
            const base = (30 + 80 * brightness) | 0
            r = (base * 0.85 + 15 * wavePhase) | 0
            g = (base * 0.9 + 10 * wavePhase) | 0
            b = base
          } else {
            const base = (120 + 135 * brightness) | 0
            r = (base * 0.85 + 30 * wavePhase) | 0
            g = (base * 0.9 + 20 * wavePhase) | 0
            b = base
          }
          alpha = 0.3 + brightness * 0.7
          if (mouseInf > 0.1) {
            if (isLight) {
              r = (r * (1 - mouseInf * 0.4)) | 0
              g = (g * (1 - mouseInf * 0.4)) | 0
              b = (b * (1 - mouseInf * 0.3)) | 0
            } else {
              r = (r + (255 - r) * mouseInf) | 0
              g = (g + (255 - g) * mouseInf) | 0
              b = (b + (255 - b) * mouseInf * 0.8) | 0
            }
          }
        }

        let displayChar = char
        // During intro cycling, show random boot characters
        if (!isSettled && cyclePhase >= 0) {
          displayChar = hackBootChars[Math.abs(cyclePhase) % hackBootChars.length]
          // Fade in alpha during intro
          alpha *= cellProgress
        } else if (mouseInf > 0.3 && flicker < 0.3) {
          displayChar = hackBootChars[(c.col * 7 + c.row * 13 + ((time * 12) | 0)) % hackBootChars.length]
        }

        const cfn = colorFnRef.current
        if (cfn) {
          const tint = cfn(c.x, c.y, width, height)
          const [tr, tg, tb] = tint.split(",").map(Number)
          // Blend: use the tint color but preserve the original brightness/alpha
          const lum = (r * 0.299 + g * 0.587 + b * 0.114) / 255
          r = Math.round(tr * lum)
          g = Math.round(tg * lum)
          b = Math.round(tb * lum)
        }
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`
        ctx.fillText(displayChar, c.x, c.y)
      }

      if (cfg.scanlines > 0) {
        ctx.fillStyle = isLight ? `rgba(255,255,255,${cfg.scanlines * 0.5})` : `rgba(0,0,0,${cfg.scanlines * 0.5})`
        for (let sy = 0; sy < height; sy += 3) {
          ctx.fillRect(0, sy, width, 1)
        }
      }

      if (cfg.noiseAmount > 0.1) {
        const count = (cfg.noiseAmount * 40) | 0
        const hackChars = "01{}[]<>/\\|!@#$%&*:;=+-_~"
        const timeSlot = (time * 3) | 0
        ctx.font = `${charSize * 0.8}px monospace`
        const st = cfg.charSet as RampKey
        const nc = isLight
          ? (st === "blocks" ? "108,111,117" : st === "code" ? "140,0,60" : "60,65,75")
          : (st === "blocks" ? "163,166,168" : st === "code" ? "255,0,128" : "160,170,190")
        for (let s = 0; s < count; s++) {
          const seed = Math.sin(s * 127.1 + timeSlot * 311.7) * 43758.5453
          const r2 = seed - Math.floor(seed)
          const seed2 = Math.sin(s * 269.5 + timeSlot * 183.3) * 43758.5453
          const r3 = seed2 - Math.floor(seed2)
          const a = 0.03 + r2 * 0.06
          ctx.fillStyle = `rgba(${nc},${a})`
          ctx.fillText(hackChars[(s * 7 + timeSlot) % hackChars.length], width * 0.2 + r2 * width * 0.6, height * 0.15 + r3 * height * 0.7)
        }
      }

      ctx.restore()
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full" style={{ background: theme === "light" ? ASCII_BG_LIGHT : ASCII_BG_DARK, touchAction: "none" }} />
}
