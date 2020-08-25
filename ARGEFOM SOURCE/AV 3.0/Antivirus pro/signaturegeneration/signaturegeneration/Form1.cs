using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.IO;
using System.Runtime.InteropServices;
using System.Runtime.InteropServices.ComTypes;
using System.Security .Cryptography ;
using Microsoft.VisualBasic;
using System.Resources;
using System.Management;
using System.Text.RegularExpressions;
using System.Diagnostics;
using Microsoft.Win32;

namespace signaturegeneration
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void button1_Click(object sender, EventArgs e)
        {
            DialogResult result = openFileDialog1.ShowDialog();
            openFileDialog1.Filter = " All files (*.*)|*.*";
            if (result == DialogResult.OK) // Test result.
            {
                lblfile.Text = openFileDialog1.FileName;
                scanning(openFileDialog1 .FileName );
            }
        }
        public void scanning(string file)
        {
  
                    MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
                    FileInfo fi = new FileInfo(file);
                    string sf = fi.Extension;
                    FileStream ff = new FileStream(file, FileMode.Open, FileAccess.Read, FileShare.Read, 10000);
                    FileInfo fdd = new FileInfo(file);
                    md5.ComputeHash(ff);
                    Byte[] hash = md5.Hash;

                    StringBuilder buff = new StringBuilder();

                    foreach (Byte hashbyte in hash)
                    {
                        buff.Append(string.Format("{0:X2}", hashbyte));
                    }
                    textBox1.Text = buff.ToString();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            if (!(textBox2.Text.Trim().Equals("") || textBox1.Text.Trim().Equals("")))
            {
                string sig = textBox2.Text + "=" + textBox1.Text;
                label3.Text = "Entire Format:";
                textBox3.Text = sig;
                FileStream ff = new FileStream("updater1/signiture.txt", FileMode.Append);
                StreamWriter wrt = new StreamWriter(ff);
                wrt.WriteLine(sig);
                wrt.Close();
                ff.Close();
                textBox2.Text = "";
                textBox1.Text = "";
            }
            else
            {
                MessageBox.Show("Please Fill All The Details");
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            EncryptFile(@"updater1\signiture.txt",
                          @"update1\signiture.txt",
                          "?>?~y>?");

            // Decrypt the file.
            //DecryptFile(@"update1\signiture.txt",
            //    @"updater1\signiture1.txt",
            //    "?>?~y>?");

            // Remove the Key from memory. 
            //ZeroMemory(gch.AddrOfPinnedObject(), sSecretKey.Length * 2);
            //gch.Free();
        }
        static void EncryptFile(string sInputFilename, string sOutputFilename, string sKey)
        {
            FileStream fsInput = new FileStream(sInputFilename,
               FileMode.Open,
               FileAccess.Read);

            FileStream fsEncrypted = new FileStream(sOutputFilename,
               FileMode.Create,
               FileAccess.Write);
            DESCryptoServiceProvider DES = new DESCryptoServiceProvider();
            DES.Key = ASCIIEncoding.ASCII.GetBytes(sKey);
            DES.IV = ASCIIEncoding.ASCII.GetBytes(sKey);
            ICryptoTransform desencrypt = DES.CreateEncryptor();
            CryptoStream cryptostream = new CryptoStream(fsEncrypted,
               desencrypt,
               CryptoStreamMode.Write);

            byte[] bytearrayinput = new byte[fsInput.Length];
            fsInput.Read(bytearrayinput, 0, bytearrayinput.Length);
            cryptostream.Write(bytearrayinput, 0, bytearrayinput.Length);
            MessageBox.Show("Updater Successfully Created");
            cryptostream.Close();
            fsInput.Close();
            fsEncrypted.Close();
        }

        static void DecryptFile(string sInputFilename,
           string sOutputFilename,
           string sKey)
        {
            DESCryptoServiceProvider DES = new DESCryptoServiceProvider();
            //A 64 bit key and IV is required for this provider.
            //Set secret key For DES algorithm.
            DES.Key = ASCIIEncoding.ASCII.GetBytes(sKey);
            //Set initialization vector.
            DES.IV = ASCIIEncoding.ASCII.GetBytes(sKey);

            //Create a file stream to read the encrypted file back.
            FileStream fsread = new FileStream(sInputFilename,
               FileMode.Open,
               FileAccess.Read);
            //Create a DES decryptor from the DES instance.
            ICryptoTransform desdecrypt = DES.CreateDecryptor();
            //Create crypto stream set to read and do a 
            //DES decryption transform on incoming bytes.
            CryptoStream cryptostreamDecr = new CryptoStream(fsread,
               desdecrypt,
               CryptoStreamMode.Read);
            //Print the contents of the decrypted file.
            StreamWriter fsDecrypted = new StreamWriter(sOutputFilename);
            fsDecrypted.Write(new StreamReader(cryptostreamDecr).ReadToEnd());
            fsDecrypted.Flush();
            fsDecrypted.Close();
        } 
    }
}
