import { z } from 'zod';
const loginSchema = z.object({
  username: z.string().min(2, 'Too short!11'),
  password: z.string().min(6, 'Too short!22'),
});

export const handleLogin1 = async (id: number) => {
//     console.log('formData',formData)
//   const result = loginSchema.safeParse(formData); //将map转变为object
//   if (!result.success) {
//     const tree = z.treeifyError(result.error);
//     let str = '';
//     Object.entries(tree.properties!).forEach(([_key, value]) => {
//       value.errors.forEach((error: any) => {
//         str += error + '\n';
//       });
//     });
//     console.log('44444', str);
    return {
      message: 11,
    };
//   }
  return {
    message: '登录成功了',
  };
};

export const handleLogin = handleLogin1.bind(null,22);
