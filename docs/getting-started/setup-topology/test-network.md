# Test Network Topology

## Network Topology in NAT 

If you are not sure of these information, you can check the content of the previous step.

|  Name   | NAT   | LAN | WAN |
|  ----   | ----  | --- | --- |
| DUT | N/A | 192.168.127.254 | 192.168.128.254 |
| guerrilla_exec  | 192.168.57.9 | 192.168.127.9 | N/A |
| guerrilla_host_1  | 192.168.57.11 | 192.168.127.11 | N/A |
| guerrilla_host_2  | 192.168.57.10 | N/A | 192.168.128.10 |

## DUT for LAN and WAN
Enter router device terminal to ping others target.

```bash
$ ping -c 5 192.168.127.9
```

```bash
$ ping -c 5 192.168.127.11
```

```bash
$ ping -c 5 192.168.128.10
```

## Executor for NAT
Enter `guerrilla_exec` VM instace

Test connection for `guerrilla_exec` with `guerrilla_host2`


```bash
$ ping -c 5 192.168.57.11
```
```bash
$ ping -c 5 192.168.57.10
```

