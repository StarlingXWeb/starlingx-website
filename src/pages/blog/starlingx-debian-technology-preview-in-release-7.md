---
templateKey: blog-post
title: Debian Technology Preview in Release 7
author: Frank Miller and Eric Macdonald
date: 2022-07-28T16:23:52.741Z
category:
  - label: News & Announcements
    id: category-A7fnZYrE1
---

With support for the CentOS Distribution being discontinued, StarlingX will move
to the Debian OS Distribution. Here's how to get ready.<!– more –>

Debian is a well-established Linux Distribution supported by a large and mature
open-source community and used by hundreds of commercial organizations,
including Google. When fully transitioned to Debian, StarlingX will have full
functional equivalence to the current CentOS-based versions of StarlingX.

# Rollout

The planned rollout for the transition to Debian is as follows:

## StarlingX release 6.0 (RELEASED)

* General Availability (GA) Release of CentOS7 StarlingX (for production
  deployments)

* Moved to 5.10 kernel, which will be used by the upcoming Debian-based release.

## StarlingX release 7.0

* StarlingX release 7.0 is a general Availability (GA) Release of CentOS7
  StarlingX for production deployments. It will be the last release of a
  CentOS7–based StarlingX.

* StarlingX release 7.0 inherits the 5.10 version of the Linux kernel introduced
  in StarlingX release 6.0.

* StarlingX release 7.0 is also a technology Preview Release of Debian StarlingX
  for evaluation purposes.

* StarlingX release 7.0 release runs Debian Bullseye (11.3). It is limited in
  scope to the AIO-SX configuration. Duplex, and standard configurations are not
  available.

See [Technology Preview Reduced Scope](#technology-preview-reduced-scope) for details.

## Debian StarlingX General Availability

An upcoming release will make Debian StarlingX generally available for
production deployments.

This upcoming release will run Debian Bullseye 11.3 or later with full
functional equivalence to the CentOS-based StarlingX.

The StarlingX release 7.0 Debian Technology Preview allows you to evaluate and
prepare for the upcoming Debian-based General Availability release while
continuing to run your production deployment on CentOS-based StarlingX. It is
strongly recommended that you perform a complete assessment of StarlingX and
your application running on StarlingX in a lab setting to fully understand and
plan for any changes that may be required to your application when you migrate
to the StarlingX Debian General Availability release in a production
environment.

Major features of Debian-based StarlingX will include:

* Linux 5.10 Yocto-based kernel (see <https://www.yoctoproject.org/>).

* The Yocto Project Kernel:

  * tracks stable kernel updates very closely; staying very current with the
    stable kernel,

  * provides a reliable implementation of the pre-empt-rt patchset (see
    <https://rt.wiki.kernel.org/index.php/Main_Page>), and provides predictable
    and searchable CVE handling.

    StarlingX will also leverage its existing relationships with the Yocto
    Project to enhance development, bug fixes and other activities in the Yocto
    Project kernel to drive StarlingX quality and feature content.

* Debian Bullseye (11.3)

  Debian is a well-established Linux Distribution supported by a large and
  mature open-source community.

* OSTree <https://ostree.readthedocs.io/en/stable/manual/introduction/>

  OSTree provides for robust and efficient versioning, packaging and upgrading
  of Linux-based systems.

* An updated Installer to seamlessly adapt to Debian and OSTree

  Updated software patching and upgrades for Debian and OSTree.

# Operational Impacts

The operational impact of Debian-based StarlingX is small:

*  Functional equivalence with CentOS-based StarlingX

*  Use of the StarlingX CLIs and APIs will remain the same:

   *  StarlingX on Debian will provide the same CLIs and APIs as StarlingX on
      CentOS.

   *  StarlingX on Debian will run the same 5.10 kernel version as StarlingX on
      CentOS.

   *  StarlingX on Debian will support the same set of Kubernetes APIs used in
      StarlingX on CentOS.

   *  The procedure to install hosts will be unchanged by the migration from
      CentOS to Debian. Only the `grub` menu has been modified.

   *  The CLIs used for software updates (patching) will be unchanged by
      the migration from CentOS to Debian.

*  User applications running in containers on CentOS should run on Debian
   without modification. Re-validation of containers on Debian is encouraged to
   identify any exceptions.

*  A small subset of operating system-specific commands will differ. Some of
   these changes result from the switch in distributions while others are
   generic changes that have accumulated since the release of the CentOS
   distribution currently used. For example:


   *  The Debian installation requires new pxeboot grub menus. See
      [Technology Preview Installation](#technology-preview-installation).

   *  Some prompt strings will be slightly different (for example: ssh login,
      passwd command, and others).

   *  Many 3rd-party software packages are running a newer version in Debian
      and this may lead to minor changes in syntax, output, config files, and
      logs.

   *  The URL to expose keystone service does not have the version appended.

   *  On Debian, interface and static routes need to be handled using
      system-API.

      *  Do not edit configuration files in `/etc/network/` as they are
         regenerated from sysinv database after a system reboot. Any changes
         directly done there will be lost.

      *  The static routes configuration file is `/etc/network/routes`

      *  Interface configuration files are located in
         `/etc/network/interfaces.d/`

   *   Debian stores network information in `/etc/network` instead of the
       `/etc/sysconfig/network-scripts` location used in CentOS. However, the
       StarlingX `system …` commands are unchanged. 

   *   Patching on Debian is done using ostree commits rather than individual
       RPMs.

       You can see which packages are updated by ostree using the `dpkg
       -l` command instead of `rpm -qa` used on CentOS.

   *   Patching is done via reboot required patches. In-service patching is not
       supported in the Technology Preview release.

   *   The patching CLI commands and Horizon interactions are the same as for
       CentOS.

       The supported patching CLI commands for  are:

       * `sw-patch upload`
       * `sw-patch upload-dir`
       * `sw-patch apply`
       * `sw-patch remove`
       * `sw-patch delete`
       * `sw-patch query`
       * `sw-patch show`
       * `sw-patch query-hosts`
       * `sw-patch host-install`
       * `sw-patch host-install-async`
       * `sw-patch install-local`

       However, since Debian patches work with ostree commits rather than
       RPMs, the patch contents visible on Horizon and CLI are different.

       Running the `sw-patch show <patch-ID>` CLI command or selecting
       **Software Management** and the patch name in Horizon displays details
       about the contents of a Debian patch including:

       * The number of ostree commits in this patch.

       * The base commit on which the patch can be applied.

       * The commit IDs that are associated with this patch.

       **CLI**

       Sample `sw-patch show <patch-ID>` output:


           DEBIAN_RR:
           Release:        22.06
           Patch State:    Available
           Status:         DEV
           Unremovable:    N
           RR:             Y
           Summary:        Reboot Required Patch 0015
           Description:    Reboot Required Patch for resolving subcloud unlock issue
           Install Instructions:
                           Please ensure that there is 450MB minimum available space in the directory where the patch is going to be placed.
           Warnings:       This patch requires PATCH_0014 to be installed first.
           Contents:

           No. of commits: 2
           Base commit:    d0a0d5ad78746c86ab477fb5ccb98d7e813484a9cb1c0a780363233794655fdc
           Commit1:        a386e76d6430f7fd6693d40379cccc838445f4abd409f158b919c010da80cb83
           Commit2:        647dcef3f32d61b3d341fab905f5267c5614d804cae5d295693a6098db6e4e6d


       **Horizon**

       Sample **Software Management** > *patch name* output.

       ![Debian patching details in Horizon](figures/debian_patching_details_horizon.png)


# Technology Preview Reduced Scope


The StarlingX release 7.0 Debian Technology Preview release will have reduced
scope:

*    Only AIO-SX deployments are supported. Duplex, Standard and Distributed
     Cloud configurations are not available in this release.

*    Only Kubernetes version 1.23 is supported.

*    Support for both standard and low-latency kernel.

*    Only Reboot Patching is available. In-service patching is not supported.

*    Upgrades to or from this release are not supported.

Full equivalency of configurations and features will be supported in the
upcoming StarlingX Debian General Availability release.

# Technology Preview Installation

In general, the installation of StarlingX  Debian Technology Preview on
All-in-one Simplex is unchanged.

There are no changes to:

*  The overall installation workflow.

*  The installation prerequisites, i.e. required files, boot mechanism (bootable
   USB or pxeboot server), network connectivity, external DNS Server and a
   Docker Registry.
   
*  The hardware requirements: <https://docs.starlingx.io/planning/kubernetes/starlingx-hardware-requirements.html>,
   or

*  The preparation of physical servers, i.e. BIOS setup, etc.

The only minor change in the installation is in the initial install of software
on controller-0. 

There is a single install menu to choose between an AIO-Controller with the
Standard Kernel and an AIO-Controller with the Low-Latency Kernel. Of course,
the actual console log output of the software install will be different due to
OSTree and Debian details.

The Debian installation requires configuration of the new pxeboot grub menus;
one for servers with Legacy BIOS support and another for servers with UEFI
firmware.

During PXE boot configuration setup, as described in
<https://docs.starlingx.io/deploy_install_guides/r6_release/bare_metal/configuring-a-pxe-boot-server.html>,
additional steps are required to collect configuration information and create a
grub menu to install StarlingX AIO controller-0 function on the target server.

#. Wipe the install device prior to Debian installation.

       $ sudo wipedisk --force --include-backup
       $ sudo sgdisk -o /dev/sda

   Repeat the `sudo sgdisk -o` command for all disks, such as `dev/sdb`,
   `/dev/sdc`, and so-on.

#. **Option 1:** Install controller-0 from a USB device containing the
   Debian ISO image.

   Use this method to install locally from a physical or virtual media USB
   device/ISO.

   #. Add the Debian ISO image to a USB device and make the target server.
      boot the ISO image from that USB device.

   #. During installation, select the install type from the presented
      menu. For a UEFI installation, the menu options are prefixed with
      "UEFI ".

#. **Option 2:** Install controller-0 from a PXEboot install feed.

   This method uses a network PXEboot install from a remote PXEboot server and
   'feed' directory.

   * The 'feed' directory is a directory containing the mounted contents
     of the Debian ISO.

   * The 'feed' creation process for the Debian install differs from the
     CentOS method.

   * The 'feed' can be populated with either a **direct ISO mount**
     or a **copy of the ISO content**.

   **Direct ISO mount** method:

   #. Mount the ISO at the feed directory location on the pxeboot server.

   #. Copy the ISO to the 'feed' directory location pxeboot server.

      **Note:**

      This can be a common location for installing many servers or a
      unique location for a specific server.

   #. Mount the ISO as the 'feed' directory.

      **Note:** 
	  
	  The mount requires root access. If you don't have root
      access on the PXEboot server then use the **ISO copy** method.

          $ IMAGENAME=<debian_image>
          $ sudo mount -o loop ${IMAGENAME}.iso ${IMAGENAME}_feed

   **Copy ISO contents** method:


   #. Create a tarball containing the mounted ISO content.

   #. Copy the Debian ISO to a location where the ISO can be mounted.

   #. Mount the ISO, tar it up and copy the feed tarball to the PXEboot
      server.


   #. Untar the feed tarball at the feed directory location on your
      PXEboot server.

      An example of the above commands:

          $ IMAGENAME=<debian_image>

          $ sudo mount -o loop ${IMAGENAME}.iso ${IMAGENAME}_feed
          $ tar -czf ${IMAGENAME}_feed.tgz ${IMAGENAME}_feed
          $ scp ${IMAGENAME}_feed.tgz <username>@<pxeboot_server>:<feed directory>

          $ ssh <username>@<pxeboot_server>

          $ cd <feed directory>
          $ tar -xzf ${IMAGENAME}_feed.tgz
          $ rm ${IMAGENAME}_feed.tgz

   #. Optionally, link your new feed directory to the name the pxeboot
      server translates the incoming MAC based DHCP request to.

          $ ln -s ${IMAGENAME}_feed feed

      Your 'feed' directory or link should now list similarly to the
      following example:

          drwxr-xr-x  7 someuser users       4096 Jun 13 10:33          starlingx-20220612220558_feed
          lrwxrwxrwx  1 someuser users         58 Jun 13 10:35  feed -> starlingx-20220612220558_feed

      The 'feed' directory structure should be as follows:

          feed
          ├── bzImage-rt                      ... Lowlatency kernel
          ├── bzImage-std                     ... Standard kernel
          ├── initrd                          ... Installer initramfs image
          ├── kickstart
          │   └── kickstart.cfg               ... Unified kickstart
          │
          ├── ostree_repo                     ... OSTree Archive Repo
          │   ├── config
          │   ├── extensions
          │   └── objects
          │
          ├── pxeboot
               └── samples
                  ├── efi-pxeboot.cfg.debian  ... controller-0 UEFI install menu sample
                  ├── pxeboot.cfg.debian      ... controller-0 BIOS install menu sample
                  ├── pxeboot_setup.sh        ... script used to tailor the above samples
                  └── README                  ... info file

      Note that many files and directories have been omitted for clarity.

   #. Set up the PXEboot grub menus.

      The ISO contains a `pxeboot/sample` directory with controller-0
      install grub menus.

      * For BIOS: `feed/pxeboot/samples/pxeboot.cfg.debian`

      * For UEFI: `feed/pxeboot/samples/efi-pxeboot.cfg.debian`

      You must customize these grub menus for a specific server
      install by modifying the following variable replacement strings
      with path and other information that is specific to your pxeboot
      server.

      `xxxFEEDxxx`
      : The path between http server base and feed directory. For
        example: `/var/www/html/xxxFEED_xxx/<ISO content>`

      `xxxPXEBOOTxxx`
      : The offset path between /pxeboot and the feed to find
        `bzImage/initrd`. For example:
        `/var/pxeboot/xxxPXEBOOTxxx/<ISO content>`

      `xxxBASE_URLxxx`
      : The pxeboot server URL: `http://###.###.###.###`

      `xxxINSTDEVxxx`
      : The install device name. Default: `/dev/sda` Example:
        `/dev/nvme01`

      `xxxSYSTEMxxx`
      : The system install type index. Default: aio>aio-serial
        (All-in-one Install - Serial; Console)

          menu32               = no default system install type ; requires manual select

          disk                 = Disk Boot

          standard>serial      = Controller Install - Serial Console

          standard>graphical   = Controller Install - Graphical Console

          aio>serial           = All-in-one Install - Serial Console

          aio>graphical        = All-in-one Install - Graphical Console

          aio-lowlat>serial    = All-in-one (lowlatency) Install - Serial Console

          aio-lowlat>graphical = All-in-one (lowlatency) Install - Graphical Console

      The ISO also contains the `pxeboot/samples/pxeboot_setup.sh`
      script that can be used to automatically setup both the BIOS and
      UEFI grub files for a specific install.

          ./feed/pxeboot/samples/pxeboot_setup.sh --help

          Usage: ./pxeboot_setup.sh [Arguments Options]

          Arguments:

          -i | --input   <input path>     : Path to pxeboot.cfg.debian and efi-pxeboot.cfg.debian grub template files
          -o | --output  <output path>    : Path to created pxeboot.cfg.debian and efi-pxeboot.cfg.debian grub files
          -p | --pxeboot <pxeboot path>   : Offset path between /pxeboot and bzImage/initrd
          -f | --feed    <feed path>      : Offset path between http server base and mounted iso
          -u | --url     <pxe server url> : The pxeboot server's URL

          Options:

          -h | --help                     : Print this help info
          -b | --backup                   : Create backup of updated grub files as .named files
          -d | --device <install device>  : Install device path ; default: /dev/sda
          -s | --system <system install>  : System install type ; default: 3

          0 = Disk Boot
          1 = Controller Install - Serial Console
          2 = Controller Install - Graphical Console
          3 = All-in-one Install - Serial Console       (default)
          4 = All-in-one Install - Graphical Console
          5 = All-in-one (lowlatency) Install - Serial Console
          6 = All-in-one (lowlatency) Install - Graphical Console

          Example:

          pxeboot_setup.sh -i /path/to/grub/template/dir
                           -o /path/to/target/iso/mount
                           -p pxeboot/offset/to/bzImage_initrd
                           -f pxeboot/offset/to/target_feed
                           -u http://###.###.###.###
                           -d /dev/sde
                           -s 5

The remaining install steps are also completely unchanged. You can find them
here:

<https://docs.starlingx.io/deploy_install_guides/r6_release/bare_metal/aio_simplex_install_kubernetes.html>

# Technology Preview Known Issues

Known issues and workarounds with the StarlingX release 7.0 are the same as
those for StarlingX release 7.0 based on CentOS.